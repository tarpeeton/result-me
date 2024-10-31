// i18n/settings.js
export const fallbackLng = 'ru';
export const languages = [fallbackLng, 'en', 'uz'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['path', 'cookie', 'navigator'],
      caches: ['cookie'],
    },
  };
}
