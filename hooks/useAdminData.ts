import { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, GALLERY_IMAGES, NEWS_DATA } from '../constants';
import { Heart, Sparkles, User, CheckCircle } from 'lucide-react';

export interface AdminData {
  services: typeof SERVICES_DATA;
  testimonials: typeof TESTIMONIALS_DATA;
  faq: typeof FAQ_DATA;
  gallery: typeof GALLERY_IMAGES;
  contact: typeof CONTACT_INFO;
  news: typeof NEWS_DATA;
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
  // Sprawdź czy jesteśmy w przeglądarce (nie podczas SSR)
  if (typeof window === 'undefined') {
    return {
      services: SERVICES_DATA,
      testimonials: TESTIMONIALS_DATA,
      faq: FAQ_DATA,
      gallery: GALLERY_IMAGES,
      contact: CONTACT_INFO,
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Przywróć ikony z nazw stringowych
        if (parsed.services) {
          parsed.services = restoreIcons(parsed.services);
        }
        // Ensure newsData is always an array, fallback to empty if null/undefined
        if (!parsed.news) {
          parsed.news = []; 
        }
        return parsed;
      } catch (e) {
        console.error('Error parsing stored admin data:', e);
      }
    }
  } catch (e) {
    console.error('Error accessing localStorage:', e);
  }
  
  // Domyślne dane z constants
  return {
    services: SERVICES_DATA,
    testimonials: TESTIMONIALS_DATA,
    faq: FAQ_DATA,
    gallery: GALLERY_IMAGES,
    contact: CONTACT_INFO,
    news: NEWS_DATA,
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
    try {
      if (typeof window !== 'undefined') {
        const dataToStore = prepareDataForStorage(newData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
      }
      setData(newData);
      setHasChanges(false);
    } catch (e) {
      console.error('Error saving to localStorage:', e);
      setData(newData);
      setHasChanges(false);
    }
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
      news: NEWS_DATA,
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
    // Add individual setters for easier state management in admin sub-components
    setServicesData: (value: typeof SERVICES_DATA) => updateSection('services', value),
    setTestimonialsData: (value: typeof TESTIMONIALS_DATA) => updateSection('testimonials', value),
    setFaqData: (value: typeof FAQ_DATA) => updateSection('faq', value),
    setGalleryImages: (value: typeof GALLERY_IMAGES) => updateSection('gallery', value),
    setContactInfo: (value: typeof CONTACT_INFO) => updateSection('contact', value),
    setNewsData: (value: typeof NEWS_DATA) => updateSection('news', value),
  };
};

