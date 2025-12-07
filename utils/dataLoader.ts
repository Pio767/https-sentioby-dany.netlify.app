import { CONTACT_INFO, SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA, GALLERY_IMAGES } from '../constants';
import { loadAdminData } from '../hooks/useAdminData';

// Helper do ładowania danych - najpierw z localStorage (jeśli są), potem z constants
export const getServicesData = () => {
  const adminData = loadAdminData();
  return adminData.services || SERVICES_DATA;
};

export const getTestimonialsData = () => {
  const adminData = loadAdminData();
  return adminData.testimonials || TESTIMONIALS_DATA;
};

export const getFAQData = () => {
  const adminData = loadAdminData();
  return adminData.faq || FAQ_DATA;
};

export const getGalleryImages = () => {
  const adminData = loadAdminData();
  return adminData.gallery || GALLERY_IMAGES;
};

export const getContactInfo = () => {
  const adminData = loadAdminData();
  return adminData.contact || CONTACT_INFO;
};

