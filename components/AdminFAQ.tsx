import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { FAQ_DATA } from '../constants';

const AdminFAQ: React.FC = () => {
  const { data, updateSection } = useAdminData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newFAQ, setNewFAQ] = useState(false);

  const faq = data.faq || FAQ_DATA;

  const handleSave = (item: any) => {
    const updated = faq.map((f: any) => (f.id === item.id ? item : f));
    updateSection('faq', updated);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie diese Frage löschen möchten?')) {
      const updated = faq.filter((f: any) => f.id !== id);
      updateSection('faq', updated);
    }
  };

  const handleAdd = (item: any) => {
    const updated = [...faq, { ...item, id: `faq-${Date.now()}` }];
    updateSection('faq', updated);
    setNewFAQ(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-white">FAQ verwalten</h2>
        <button
          onClick={() => setNewFAQ(true)}
          className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          Frage hinzufügen
        </button>
      </div>

      <div className="space-y-4">
        {faq.map((item: any) => {
          const isEditing = editingId === item.id;

          if (isEditing) {
            return (
              <FAQEditForm
                key={item.id}
                item={item}
                onSave={handleSave}
                onCancel={() => setEditingId(null)}
              />
            );
          }

          return (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-gold text-sm mb-1">Frage (ES)</h3>
                      <p className="text-white font-medium">{item.questionEs}</p>
                    </div>
                    <div>
                      <h3 className="text-gold text-sm mb-1">Antwort (ES)</h3>
                      <p className="text-white/70">{item.answerEs}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                      <div>
                        <h3 className="text-gold text-sm mb-1">Frage (DE)</h3>
                        <p className="text-white/70 text-sm">{item.questionDe}</p>
                      </div>
                      <div>
                        <h3 className="text-gold text-sm mb-1">Frage (EN)</h3>
                        <p className="text-white/70 text-sm">{item.questionEn}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setEditingId(item.id)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Edit2 size={16} className="text-gold" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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

      {newFAQ && (
        <FAQEditForm
          item={{ id: 'new', questionEs: '', answerEs: '', questionDe: '', answerDe: '', questionEn: '', answerEn: '' }}
          onSave={handleAdd}
          onCancel={() => setNewFAQ(false)}
          isNew
        />
      )}
    </div>
  );
};

const FAQEditForm: React.FC<{
  item: any;
  onSave: (item: any) => void;
  onCancel: () => void;
  isNew?: boolean;
}> = ({ item, onSave, onCancel, isNew = false }) => {
  const [formData, setFormData] = useState(item);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/15 border-2 border-gold/40 rounded-lg p-6 space-y-4 relative z-10 shadow-xl backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm mb-2">Frage (ES)</label>
          <input
            type="text"
            value={formData.questionEs}
            onChange={(e) => setFormData({ ...formData, questionEs: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Antwort (ES)</label>
          <textarea
            value={formData.answerEs}
            onChange={(e) => setFormData({ ...formData, answerEs: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Frage (DE)</label>
          <input
            type="text"
            value={formData.questionDe}
            onChange={(e) => setFormData({ ...formData, questionDe: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Antwort (DE)</label>
          <textarea
            value={formData.answerDe}
            onChange={(e) => setFormData({ ...formData, answerDe: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Frage (EN)</label>
          <input
            type="text"
            value={formData.questionEn}
            onChange={(e) => setFormData({ ...formData, questionEn: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Antwort (EN)</label>
          <textarea
            value={formData.answerEn}
            onChange={(e) => setFormData({ ...formData, answerEn: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={3}
            required
          />
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

export default AdminFAQ;


