import React, { useState } from 'react';
import { Plus, Trash2, Save, X, Image as ImageIcon } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { GALLERY_IMAGES } from '../constants';

const AdminGallery: React.FC = () => {
  const { data, updateSection } = useAdminData();
  const [newImageUrl, setNewImageUrl] = useState('');

  const gallery = data.gallery || GALLERY_IMAGES;

  const handleAdd = () => {
    if (newImageUrl.trim()) {
      const updated = [...gallery, newImageUrl.trim()];
      updateSection('gallery', updated);
      setNewImageUrl('');
    }
  };

  const handleDelete = (index: number) => {
    if (confirm('Czy na pewno chcesz usunąć to zdjęcie?')) {
      const updated = gallery.filter((_, i) => i !== index);
      updateSection('gallery', updated);
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const updated = [...gallery];
    if (direction === 'up' && index > 0) {
      [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
    } else if (direction === 'down' && index < updated.length - 1) {
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    }
    updateSection('gallery', updated);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-white">Zarządzanie Galerią</h2>
      </div>

      {/* Add new image */}
      <div className="bg-white/5 border border-gold/30 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-serif font-bold text-white mb-4">Dodaj nowe zdjęcie</h3>
        <div className="flex gap-2">
          <input
            type="url"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            placeholder="Wklej URL zdjęcia (np. https://example.com/image.jpg)"
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold"
          />
          <button
            onClick={handleAdd}
            disabled={!newImageUrl.trim()}
            className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Plus size={16} />
            Dodaj
          </button>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((imageUrl: string, index: number) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
            <div className="aspect-square relative">
              <img
                src={imageUrl}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Image+Error';
                }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => handleMove(index, 'up')}
                  disabled={index === 0}
                  className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Przenieś w górę"
                >
                  ↑
                </button>
                <button
                  onClick={() => handleMove(index, 'down')}
                  disabled={index === gallery.length - 1}
                  className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Przenieś w dół"
                >
                  ↓
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 bg-red-500/80 hover:bg-red-500 rounded text-white flex items-center gap-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-white/50 text-xs truncate">{imageUrl}</p>
            </div>
          </div>
        ))}
      </div>

      {gallery.length === 0 && (
        <div className="text-center py-12 bg-white/5 border border-white/10 rounded-lg">
          <ImageIcon className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <p className="text-white/50">Brak zdjęć w galerii</p>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;

