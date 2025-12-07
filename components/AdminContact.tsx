import React, { useState } from 'react';
import { Save, RotateCcw } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { CONTACT_INFO } from '../constants';

const AdminContact: React.FC = () => {
  const { data, updateSection } = useAdminData();
  const [formData, setFormData] = useState(data.contact || CONTACT_INFO);
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setHasChanges(true);
  };

  const handleSave = () => {
    updateSection('contact', formData);
    setHasChanges(false);
  };

  const handleReset = () => {
    if (confirm('Czy na pewno chcesz przywrócić domyślne wartości?')) {
      setFormData(CONTACT_INFO);
      setHasChanges(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-white">Dane Kontaktowe</h2>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <RotateCcw size={16} />
            Reset
          </button>
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Save size={16} />
            Zapisz zmiany
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-white/70 text-sm mb-2">Adres</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            placeholder="Carrer Mossen Francisco Cabrera 5, 03720 Benissa"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/70 text-sm mb-2">Telefon (ES) - Llamadas</label>
            <input
              type="tel"
              value={formData.phoneEs}
              onChange={(e) => handleChange('phoneEs', e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
              placeholder="+34 711 079 714"
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-2">Telefon (DE) - WhatsApp</label>
            <input
              type="tel"
              value={formData.phoneDe}
              onChange={(e) => handleChange('phoneDe', e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
              placeholder="+49 173 62 92 133"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            placeholder="sentio.wohlfuehlen@gmail.com"
          />
        </div>

        <div>
          <label className="block text-white/70 text-sm mb-2">Notatka o rezerwacji</label>
          <input
            type="text"
            value={formData.bookingNote}
            onChange={(e) => handleChange('bookingNote', e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            placeholder="Booking by Ramona or by Dany"
          />
        </div>
      </div>

      {hasChanges && (
        <div className="mt-4 bg-gold/20 border border-gold/50 rounded-lg p-4 text-gold text-sm">
          Masz niezapisane zmiany. Kliknij "Zapisz zmiany" aby je zapisać.
        </div>
      )}
    </div>
  );
};

export default AdminContact;

