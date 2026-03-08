import { getRequestConfig } from 'next-intl/server';

// Strona jest tylko po polsku - zawsze serwuj 'pl'
export default getRequestConfig(async () => {
    return {
        locale: 'pl',
        messages: (await import('../../messages/pl.json')).default,
        timeZone: 'Europe/Warsaw'
    };
});
