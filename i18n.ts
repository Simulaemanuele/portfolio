import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './public/locales/en/translation.json';
import itTranslations from './public/locales/it/translation.json';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            it: { translation: itTranslations },
        },
        lng: "it",
        fallbackLng: 'it',
        supportedLngs: ['it', 'en'],
        debug: true,

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },

        react: {
            useSuspense: typeof window !== 'undefined',
        },
    });

export default i18n;
