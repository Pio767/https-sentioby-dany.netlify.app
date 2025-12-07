import { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, GALLERY_IMAGES } from '../constants';
import { Heart, Sparkles, User, CheckCircle } from 'lucide-react';

export interface AdminData {
  services: typeof SERVICES_DATA;
  testimonials: typeof TESTIMONIALS_DATA;
  faq: typeof FAQ_DATA;
  gallery: typeof GALLERY_IMAGES;
  contact: typeof CONTACT_INFO;
}

const STORAGE_KEY = 'sentio_admin_data';

// Mapowanie ikon
const iconMap: Record<string, any> = {
  'Heart': Heart,
  'Sparkles': Sparkles,
  'User': User,
  'CheckCircle': CheckCircle,
};

// Funkcja do przywracania ikon z nazw stringowych
const restoreIcons = (services: any[]) => {
  return services.map((service: any) => {
    if (service.iconName && iconMap[service.iconName]) {
      return { ...service, icon: iconMap[service.iconName] };
    }
    // Jeśli icon jest już funkcją, zostaw jak jest
    if (typeof service.icon === 'function') {
      return service;
    }
    // Fallback
    return { ...service, icon: Heart };
  });
};

// Funkcja do ładowania danych - najpierw z localStorage, potem z constants
export const loadAdminData = (): AdminData => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Przywróć ikony z nazw stringowych
      if (parsed.services) {
        parsed.services = restoreIcons(parsed.services);
      }
      return parsed;
    } catch (e) {
      console.error('Error parsing stored admin data:', e);
    }
  }
  
  // Domyślne dane z constants
  return {
    services: SERVICES_DATA,
    testimonials: TESTIMONIALS_DATA,
    faq: FAQ_DATA,
    gallery: GALLERY_IMAGES,
    contact: CONTACT_INFO,
  };
};

// Hook do zarządzania danymi admin
export const useAdminData = () => {
  const [data, setData] = useState<AdminData>(loadAdminData);
  const [hasChanges, setHasChanges] = useState(false);

  // Funkcja do konwersji ikon na stringi przed zapisem
  const prepareDataForStorage = (data: AdminData): any => {
    return {
      ...data,
      services: data.services.map((service: any) => {
        const iconName = typeof service.icon === 'function' 
          ? (service.icon.name || 'Heart')
          : (service.iconName || 'Heart');
        const { icon, ...serviceWithoutIcon } = service;
        return { ...serviceWithoutIcon, iconName };
      }),
    };
  };

  // Zapisz dane do localStorage
  const saveData = (newData: AdminData) => {
    const dataToStore = prepareDataForStorage(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
    setData(newData);
    setHasChanges(false);
  };

  // Aktualizuj konkretną sekcję
  const updateSection = <K extends keyof AdminData>(
    section: K,
    value: AdminData[K]
  ) => {
    const newData = { ...data, [section]: value };
    setData(newData);
    setHasChanges(true);
  };

  // Reset do domyślnych wartości
  const resetToDefaults = () => {
    const defaults: AdminData = {
      services: SERVICES_DATA,
      testimonials: TESTIMONIALS_DATA,
      faq: FAQ_DATA,
      gallery: GALLERY_IMAGES,
      contact: CONTACT_INFO,
    };
    saveData(defaults);
  };

  // Zapisz zmiany
  const saveChanges = () => {
    saveData(data);
  };

  return {
    data,
    hasChanges,
    updateSection,
    saveChanges,
    resetToDefaults,
  };
};

