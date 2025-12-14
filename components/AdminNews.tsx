import React, { useState, useEffect } from 'react';
import { useAdminData } from '../hooks/useAdminData';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

const AdminNews: React.FC = () => {
  const { newsData, setNewsData, saveData } = useAdminData();
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
    saveData({ newsData: updatedNewsData });
    setIsEditing(false);
    setCurrentNews(null);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten news?')) {
      const updatedNewsData = newsData.filter((news: NewsItem) => news.id !== id);
      setNewsData(updatedNewsData);
      saveData({ newsData: updatedNewsData });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-white">Zarządzanie Aktualnościami</h2>
      
      {!isEditing ? (
        <button 
          onClick={handleAddNews}
          className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
        >
          <PlusCircle size={16} />
          Dodaj nowy news
        </button>
      ) : (
        <div className="bg-royal-light p-6 rounded-lg shadow-inner space-y-4">
          <h3 className="text-xl font-serif text-white">{currentNews ? 'Edytuj news' : 'Nowy news'}</h3>
          <input 
            type="text" 
            placeholder="Tytuł newsa" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
          />
          <textarea 
            placeholder="Treść newsa" 
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={4}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
          />
          <input 
            type="date" 
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
          />
          <div className="flex gap-2">
            <button 
              onClick={handleSaveNews}
              className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
            >
              <Save size={16} />
              Zapisz news
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <X size={16} />
              Anuluj
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-serif text-white">Istniejące newsy</h3>
        {newsData.length === 0 ? (
          <p className="text-white/60 italic">Brak newsów.</p>
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
