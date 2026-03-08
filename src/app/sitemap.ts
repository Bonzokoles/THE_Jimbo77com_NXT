import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jimbo77.com';
    const now = new Date().toISOString();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/experience`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/skills`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/achievements`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Blog posts
    const blogPages: MetadataRoute.Sitemap = portfolioData.blogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
