import React, { useState, useEffect } from 'react';
import { useAdminData } from '../hooks/useAdminData';
import { PlusCircle, Edit, Trash2, Save, X } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

const AdminNews: React.FC = () => {
  const { data, setNewsData } = useAdminData();
  const newsData = data.news || [];
  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    if (currentNews) {
      setNewTitle(currentNews.title);
      setNewContent(currentNews.content);
      setNewDate(currentNews.date);
    } else {
      setNewTitle('');
      setNewContent('');
      setNewDate('');
    }
  }, [currentNews]);

  const handleAddNews = () => {
    setCurrentNews(null);
    setIsEditing(true);
  };

  const handleEditNews = (news: NewsItem) => {
    setCurrentNews(news);
    setIsEditing(true);
  };

  const handleSaveNews = () => {
    if (!newTitle || !newContent || !newDate) return;

    let updatedNewsData;
    if (currentNews) {
      updatedNewsData = newsData.map((news: NewsItem) => 
        news.id === currentNews.id 
          ? { ...news, title: newTitle, content: newContent, date: newDate } 
          : news
      );
    } else {
      const newId = Date.now().toString();
      updatedNewsData = [...newsData, { id: newId, title: newTitle, content: newContent, date: newDate }];
    }
    setNewsData(updatedNewsData);
    setIsEditing(false);
    setCurrentNews(null);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Sind Sie sicher, dass Sie diese Neuigkeit löschen möchten?')) {
      const updatedNewsData = newsData.filter((news: NewsItem) => news.id !== id);
      setNewsData(updatedNewsData);
    }
  };

  return (
    <div className="space-y-6 min-h-[400px]">
      <h2 className="text-2xl font-serif text-white mb-4">Neuigkeiten verwalten</h2>
      
      {!isEditing ? (
        <div className="space-y-4">
          <button 
            onClick={handleAddNews}
            className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
          >
            <PlusCircle size={16} />
            Neuigkeit hinzufügen
          </button>
        </div>
      ) : (
        <div className="bg-white/15 border-2 border-gold/40 p-6 rounded-lg shadow-xl space-y-4 relative z-10 backdrop-blur-sm">
          <h3 className="text-xl font-serif text-white mb-4">{currentNews ? 'Neuigkeit bearbeiten' : 'Neue Neuigkeit'}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-2">Titel</label>
              <input 
                type="text" 
                placeholder="Titel eingeben..." 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-2">Inhalt</label>
              <textarea 
                placeholder="Inhalt eingeben..." 
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={6}
                className="w-full p-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/30 transition-colors resize-y"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-2">Datum</label>
              <input 
                type="date" 
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border-2 border-white/30 text-white focus:outline-none focus:border-gold focus:bg-white/30 transition-colors"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button 
                onClick={handleSaveNews}
                disabled={!newTitle || !newContent || !newDate}
                className="px-6 py-3 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={18} />
                Speichern
              </button>
              <button 
                onClick={() => {
                  setIsEditing(false);
                  setCurrentNews(null);
                  setNewTitle('');
                  setNewContent('');
                  setNewDate('');
                }}
                className="px-6 py-3 bg-white/10 border-2 border-white/20 text-white rounded-lg hover:bg-white/20 hover:border-white/30 transition-colors flex items-center gap-2"
              >
                <X size={18} />
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-serif text-white">Vorhandene Neuigkeiten</h3>
        {newsData.length === 0 ? (
          <p className="text-white/60 italic">Keine Neuigkeiten vorhanden.</p>
        ) : (
          <ul className="space-y-2">
            {newsData.map((news: NewsItem) => (
              <li key={news.id} className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10">
                <div>
                  <p className="text-white font-medium">{news.title}</p>
                  <p className="text-white/70 text-sm">{news.date}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEditNews(news)}
                    className="p-2 bg-gold/20 text-gold rounded-full hover:bg-gold/30 transition-colors"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDeleteNews(news.id)}
                    className="p-2 bg-red-500/20 text-red-500 rounded-full hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminNews;
