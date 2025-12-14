import { CONTACT_INFO, SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, GALLERY_IMAGES, NEWS_DATA } from '../constants';
import { Heart, Sparkles, User, CheckCircle } from 'lucide-react';

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
  if (!services || !Array.isArray(services)) return SERVICES_DATA;
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

// Funkcja do ładowania danych z localStorage (bez hooków React)
const loadAdminDataFromStorage = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing stored admin data:', e);
      return null;
    }
  }
  return null;
};

// Helper do ładowania danych - najpierw z localStorage (jeśli są), potem z constants
export const getServicesData = () => {
  const stored = loadAdminDataFromStorage();
  if (stored && stored.services) {
    return restoreIcons(stored.services);
  }
  return SERVICES_DATA;
};

export const getTestimonialsData = () => {
  const stored = loadAdminDataFromStorage();
  if (stored && stored.testimonials) {
    return stored.testimonials;
  }
  return TESTIMONIALS_DATA;
};

export const getFAQData = () => {
  const stored = loadAdminDataFromStorage();
  if (stored && stored.faq) {
    return stored.faq;
  }
  return FAQ_DATA;
};

export const getGalleryImages = () => {
  const stored = loadAdminDataFromStorage();
  if (stored && stored.gallery) {
    return stored.gallery;
  }
  return GALLERY_IMAGES;
};

export const getNewsData = () => {
  const stored = loadAdminDataFromStorage();
  if (stored && stored.news) {
    return stored.news;
  }
  return NEWS_DATA;
};

export const getContactInfo = () => {
  const stored = loadAdminDataFromStorage();
  if (stored && stored.contact) {
    return stored.contact;
  }
  return CONTACT_INFO;
};

// Funkcja do zapisywania danych (dla panelu admina)
export const saveAdminDataToStorage = (data: any) => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving admin data to storage:', e);
  }
};

