import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale } from './settings';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
    const cookieStore = await cookies();

    // Domyślnie używaj polskiego
    let locale: Locale = 'pl';

    // Sprawdź czy jest ciasteczko z wyborem języka
    const cookieLocale = cookieStore.get('locale')?.value;
    if (cookieLocale && locales.includes(cookieLocale as Locale)) {
        locale = cookieLocale as Locale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
        timeZone: 'Europe/Warsaw'
    };
});
