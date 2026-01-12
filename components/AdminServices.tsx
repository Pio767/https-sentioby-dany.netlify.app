import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { SERVICES_DATA } from '../constants';
import { Heart, Sparkles, User, CheckCircle } from 'lucide-react';

const AdminServices: React.FC = () => {
  const { data, updateSection } = useAdminData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newService, setNewService] = useState(false);

  const services = data.services || SERVICES_DATA;

  const iconMap: Record<string, any> = {
    'Heart': Heart,
    'Sparkles': Sparkles,
    'User': User,
    'CheckCircle': CheckCircle,
  };

  const handleSave = (service: any) => {
    // Convert icon string to icon component reference for display
    const iconName = service.icon || 'Heart';
    const IconComponent = iconMap[iconName] || Heart;
    
    const updatedService = {
      ...service,
      icon: IconComponent, // Store as component for compatibility
      iconName: iconName, // Also store name for editing
    };
    
    const updated = services.map((s: any) => 
      s.id === service.id ? updatedService : s
    );
    updateSection('services', updated);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie diese Dienstleistung löschen möchten?')) {
      const updated = services.filter((s: any) => s.id !== id);
      updateSection('services', updated);
    }
  };

  const handleAdd = (service: any) => {
    // Convert icon string to icon component reference
    const iconName = service.icon || 'Heart';
    const IconComponent = iconMap[iconName] || Heart;
    
    const newService = {
      ...service,
      id: `service-${Date.now()}`,
      icon: IconComponent,
      iconName: iconName,
    };
    
    const updated = [...services, newService];
    updateSection('services', updated);
    setNewService(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-white">Dienstleistungen verwalten</h2>
        <button
          onClick={() => setNewService(true)}
          className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          Dienstleistung hinzufügen
        </button>
      </div>

      <div className="space-y-4">
        {services.map((service: any) => {
          const isEditing = editingId === service.id;
          // Handle icon - can be component, string, or object
          let Icon = Heart;
          if (typeof service.icon === 'function') {
            Icon = service.icon;
          } else if (service.iconName) {
            Icon = iconMap[service.iconName] || Heart;
          } else if (typeof service.icon === 'string') {
            Icon = iconMap[service.icon] || Heart;
          }

          if (isEditing) {
            return <ServiceEditForm key={service.id} service={service} onSave={handleSave} onCancel={() => setEditingId(null)} />;
          }

          return (
            <div key={service.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center border border-gold/30">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{service.title}</h3>
                    <div className="space-y-2 text-sm text-white/70">
                      <p><strong className="text-white">ES:</strong> {service.descriptionEs}</p>
                      <p><strong className="text-white">DE:</strong> {service.descriptionDe}</p>
                      <p><strong className="text-white">EN:</strong> {service.descriptionEn}</p>
                    </div>
                    <div className="mt-3 flex gap-4 text-gold">
                      <span>60 min: {service.price60}€</span>
                      <span>30 min: {service.price30}€</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingId(service.id)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Edit2 size={16} className="text-gold" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} className="text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {newService && (
        <ServiceEditForm
          service={{ id: 'new', title: '', descriptionEs: '', descriptionDe: '', descriptionEn: '', price60: 0, price30: 0, icon: 'Heart' }}
          onSave={handleAdd}
          onCancel={() => setNewService(false)}
          isNew
        />
      )}
    </div>
  );
};

const ServiceEditForm: React.FC<{
  service: any;
  onSave: (service: any) => void;
  onCancel: () => void;
  isNew?: boolean;
}> = ({ service, onSave, onCancel, isNew = false }) => {
  // Extract icon name from service (handle different formats)
  const getIconName = (icon: any): string => {
    if (typeof icon === 'string') return icon;
    if (typeof icon === 'function') return icon.name || 'Heart';
    if (icon?.name) return icon.name;
    return 'Heart';
  };
  
  const [formData, setFormData] = useState({
    ...service,
    icon: getIconName(service.icon || service.iconName),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/15 border-2 border-gold/40 rounded-lg p-6 space-y-4 relative z-10 shadow-xl backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm mb-2">Titel (EN)</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Symbol</label>
          <select
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
          >
            <option value="Heart">Heart</option>
            <option value="Sparkles">Sparkles</option>
            <option value="User">User</option>
            <option value="CheckCircle">CheckCircle</option>
          </select>
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Beschreibung (ES)</label>
          <textarea
            value={formData.descriptionEs}
            onChange={(e) => setFormData({ ...formData, descriptionEs: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Beschreibung (DE)</label>
          <textarea
            value={formData.descriptionDe}
            onChange={(e) => setFormData({ ...formData, descriptionDe: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Beschreibung (EN)</label>
          <textarea
            value={formData.descriptionEn}
            onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={3}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white/70 text-sm mb-2">Preis 60 min (€)</label>
            <input
              type="number"
              value={formData.price60}
              onChange={(e) => setFormData({ ...formData, price60: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
              required
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-2">Preis 30 min (€)</label>
            <input
              type="number"
              value={formData.price30}
              onChange={(e) => setFormData({ ...formData, price30: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <X size={16} />
          Abbrechen
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
        >
          <Save size={16} />
          {isNew ? 'Hinzufügen' : 'Speichern'}
        </button>
      </div>
    </form>
  );
};

export default AdminServices;

