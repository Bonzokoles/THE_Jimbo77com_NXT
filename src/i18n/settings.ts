export const locales = ['pl', 'en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';
