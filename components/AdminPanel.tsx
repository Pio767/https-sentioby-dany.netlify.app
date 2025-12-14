import React, { useState } from 'react';
import { X, Save, RotateCcw, LogOut, Settings, Users, MessageSquare, HelpCircle, Image, Phone, Rss } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import AdminServices from './AdminServices';
import AdminTestimonials from './AdminTestimonials';
import AdminFAQ from './AdminFAQ';
import AdminGallery from './AdminGallery';
import AdminContact from './AdminContact';
import AdminNews from './AdminNews';

interface AdminPanelProps {
  onLogout: () => void;
}

type TabType = 'services' | 'testimonials' | 'faq' | 'gallery' | 'contact' | 'news';

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const { hasChanges, saveChanges, resetToDefaults } = useAdminData();
  const [activeTab, setActiveTab] = useState<TabType>('services');
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const tabs = [
    { id: 'services' as TabType, label: 'Dienstleistungen', icon: Settings },
    { id: 'testimonials' as TabType, label: 'Bewertungen', icon: MessageSquare },
    { id: 'faq' as TabType, label: 'FAQ', icon: HelpCircle },
    { id: 'gallery' as TabType, label: 'Galerie', icon: Image },
    { id: 'contact' as TabType, label: 'Kontakt', icon: Phone },
    { id: 'news' as TabType, label: 'Neuigkeiten', icon: Rss },
  ];

  const handleSave = () => {
    saveChanges();
    setShowSaveConfirm(true);
    setTimeout(() => setShowSaveConfirm(false), 2000);
  };

  const handleReset = () => {
    if (confirm('Sind Sie sicher, dass Sie die Standardwerte wiederherstellen möchten? Alle Änderungen gehen verloren.')) {
      resetToDefaults();
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-royal border-b border-gold/30 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center border border-gold/30">
              <Settings className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-white">Administrator-Panel</h1>
              <p className="text-white/60 text-xs">Verwaltung des Website-Inhalts</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {hasChanges && (
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                Ungespeicherte Änderungen
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={!hasChanges}
              className="px-4 py-2 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save size={16} />
              Speichern
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <LogOut size={16} />
              Abmelden
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-royal/80 border-b border-gold/20 flex gap-2 p-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gold text-royal font-bold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {showSaveConfirm && (
            <div className="mb-4 bg-gold/20 border border-gold/50 rounded-lg p-4 text-gold flex items-center gap-2">
              <Save size={20} />
              <span>Änderungen wurden gespeichert!</span>
            </div>
          )}

          {activeTab === 'services' && <AdminServices />}
          {activeTab === 'testimonials' && <AdminTestimonials />}
          {activeTab === 'faq' && <AdminFAQ />}
          {activeTab === 'gallery' && <AdminGallery />}
          {activeTab === 'contact' && <AdminContact />}
          {activeTab === 'news' && <AdminNews />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


