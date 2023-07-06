import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is not available for the selected language
  interpolation: {
    escapeValue: false, // Allow string interpolation
  },
});

export default i18n;
