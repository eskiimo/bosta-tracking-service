import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./locales/en/translation.json";
import arabic from "./locales/ar/translation.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: english,
    },
    ar: {
      translations: arabic,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ar"];

export default i18n;
