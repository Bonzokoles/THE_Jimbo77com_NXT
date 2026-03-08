/**
 * JSON-LD Structured Data Components
 * Invisible for users, golden for Google/AI crawlers
 */

// ─── Person + LocalBusiness (homepage) ───
export function PersonJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': 'https://jimbo77.com/#person',
                name: 'Karol Lissoń',
                alternateName: ['Jimbo77', 'Bonzokoles'],
                url: 'https://jimbo77.com',
                image: 'https://jimbo77.com/about/apple-touch-icon.png',
                jobTitle: 'Full Stack Developer & Inżynier AI',
                description: 'Architekt systemów AI i automatyzacji. Edge Computing, Multi-Agent Systems, projektowanie 3D i nowoczesny web development.',
                email: 'karol.bonzo@yahoo.com',
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'PL',
                    addressRegion: 'Polska',
                },
                knowsAbout: [
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Full Stack Development',
                    'React',
                    'Next.js',
                    'Python',
                    'Cloudflare Workers',
                    'Edge Computing',
                    'Multi-Agent Systems',
                    'PRO100',
                    'Blender',
                    'Projektowanie mebli',
                    '3D Visualization',
                ],
                sameAs: [
                    'https://github.com/Bonzokoles',
                    'https://github.com/77Jimbo77',
                ],
                worksFor: {
                    '@type': 'Organization',
                    name: 'JIMBO Inc',
                    url: 'https://jimbo77.com',
                },
            },
            {
                '@type': 'WebSite',
                '@id': 'https://jimbo77.com/#website',
                url: 'https://jimbo77.com',
                name: 'Karol Lissoń – Portfolio',
                description: 'Portfolio Full Stack Developera i Inżyniera AI. Projekty, doświadczenie, umiejętności.',
                publisher: { '@id': 'https://jimbo77.com/#person' },
                inLanguage: ['pl-PL', 'en'],
            },
            {
                '@type': 'ProfessionalService',
                '@id': 'https://jimbo77.com/#service',
                name: 'Karol Lissoń – Usługi IT & AI',
                description: 'Full Stack Development, systemy AI, automatyzacja procesów, projektowanie 3D, Cloudflare Workers. Dostępny zdalnie i lokalnie w Polsce.',
                url: 'https://jimbo77.com',
                image: 'https://jimbo77.com/about/apple-touch-icon.png',
                priceRange: '$$',
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'PL',
                    addressRegion: 'Polska',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 51.9194,
                    longitude: 19.1451,
                },
                areaServed: [
                    {
                        '@type': 'Country',
                        name: 'Polska',
                    },
                    {
                        '@type': 'Place',
                        name: 'Europa',
                    },
                ],
                serviceType: [
                    'Web Development',
                    'AI Engineering',
                    'Automatyzacja procesów',
                    'Projektowanie 3D',
                    'Edge Computing',
                    'Cloudflare Workers',
                ],
                knowsLanguage: ['pl', 'en'],
                founder: { '@id': 'https://jimbo77.com/#person' },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── BreadcrumbList (per page) ───
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── FAQPage (for FAQ section) ───
export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── BlogPosting ───
export function BlogPostJsonLd({ post }: {
    post: {
        title: string;
        excerpt: string;
        slug: string;
        date: string;
        image: string;
        tags: string[];
        author: { name: string };
    };
}) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: `https://jimbo77.com/blog/${post.slug}`,
        datePublished: post.date,
        dateModified: post.date,
        image: post.image,
        author: {
            '@type': 'Person',
            name: post.author.name,
            url: 'https://jimbo77.com',
        },
        publisher: {
            '@type': 'Person',
            name: 'Karol Lissoń',
            url: 'https://jimbo77.com',
        },
        keywords: post.tags.join(', '),
        inLanguage: 'pl-PL',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── ItemList (projects portfolio) ───
export function ProjectsJsonLd({ projects }: {
    projects: { title: string; description: string; id: string }[];
}) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Portfolio Projektów – Karol Lissoń',
        description: 'Lista projektów technologicznych: AI, web development, automatyzacja.',
        itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.title,
            description: p.description,
            url: `https://jimbo77.com/projects/${p.id}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
