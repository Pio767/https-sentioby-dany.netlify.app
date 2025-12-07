import { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, GALLERY_IMAGES } from '../constants';

export interface AdminData {
  services: typeof SERVICES_DATA;
  testimonials: typeof TESTIMONIALS_DATA;
  faq: typeof FAQ_DATA;
  gallery: typeof GALLERY_IMAGES;
  contact: typeof CONTACT_INFO;
}

const STORAGE_KEY = 'sentio_admin_data';

// Funkcja do ładowania danych - najpierw z localStorage, potem z constants
export const loadAdminData = (): AdminData => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
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

  // Zapisz dane do localStorage
  const saveData = (newData: AdminData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
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

