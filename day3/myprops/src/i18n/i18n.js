import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "key": "Hello World",
        }
      },
      de: {
        translation: {
          "key": "Hallo Welt", 
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
