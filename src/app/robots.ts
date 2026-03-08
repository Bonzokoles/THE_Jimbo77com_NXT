import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://jimbo77.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            {
                // AI crawlers – welcome
                userAgent: ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Bingbot', 'PerplexityBot'],
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
