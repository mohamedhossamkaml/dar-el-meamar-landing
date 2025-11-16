
// Re-export modularized translations from ./index.ts
import translationsModule from './index';

export const translations = translationsModule;

export type Language = 'en' | 'ar';
export type TranslationKey = typeof translations.en;
