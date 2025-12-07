import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Save, X, Star } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { TESTIMONIALS_DATA } from '../constants';

const AdminTestimonials: React.FC = () => {
  const { data, updateSection } = useAdminData();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newTestimonial, setNewTestimonial] = useState(false);

  const testimonials = data.testimonials || TESTIMONIALS_DATA;

  const handleSave = (testimonial: any, index: number) => {
    const updated = [...testimonials];
    updated[index] = testimonial;
    updateSection('testimonials', updated);
    setEditingId(null);
  };

  const handleDelete = (index: number) => {
    if (confirm('Czy na pewno chcesz usunąć tę opinię?')) {
      const updated = testimonials.filter((_, i) => i !== index);
      updateSection('testimonials', updated);
    }
  };

  const handleAdd = (testimonial: any) => {
    const updated = [...testimonials, testimonial];
    updateSection('testimonials', updated);
    setNewTestimonial(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-white">Zarządzanie Opiniami</h2>
        <button
          onClick={() => setNewTestimonial(true)}
          className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          Dodaj opinię
        </button>
      </div>

      <div className="space-y-4">
        {testimonials.map((testimonial: any, index: number) => {
          const isEditing = editingId === index;

          if (isEditing) {
            return (
              <TestimonialEditForm
                key={index}
                testimonial={testimonial}
                index={index}
                onSave={handleSave}
                onCancel={() => setEditingId(null)}
              />
            );
          }

          return (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-serif font-bold text-white">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars || 5)].map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setEditingId(index)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Edit2 size={16} className="text-gold" />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
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

      {newTestimonial && (
        <TestimonialEditForm
          testimonial={{ name: '', text: '', stars: 5 }}
          index={-1}
          onSave={(t, _) => handleAdd(t)}
          onCancel={() => setNewTestimonial(false)}
          isNew
        />
      )}
    </div>
  );
};

const TestimonialEditForm: React.FC<{
  testimonial: any;
  index: number;
  onSave: (testimonial: any, index: number) => void;
  onCancel: () => void;
  isNew?: boolean;
}> = ({ testimonial, index, onSave, onCancel, isNew = false }) => {
  const [formData, setFormData] = useState(testimonial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData, index);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-gold/30 rounded-lg p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm mb-2">Imię i nazwisko</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-2">Liczba gwiazdek (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={formData.stars}
            onChange={(e) => setFormData({ ...formData, stars: parseInt(e.target.value) || 5 })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-white/70 text-sm mb-2">Treść opinii</label>
          <textarea
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold"
            rows={5}
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
          Anuluj
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
        >
          <Save size={16} />
          {isNew ? 'Dodaj' : 'Zapisz'}
        </button>
      </div>
    </form>
  );
};

export default AdminTestimonials;

