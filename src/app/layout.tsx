import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';
import { Navbar, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui/BackToTop';
import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Karol Lissoń | Full Stack Developer & Inżynier AI',
        template: '%s | Karol Lissoń',
    },
    description: 'Architekt systemów AI i automatyzacji. Edge Computing, Multi-Agent Systems i nowoczesny web development.',
    keywords: ['Inżynier AI', 'Full Stack Developer', 'Edge Computing', 'Multi-Agent Systems', 'React', 'Next.js', 'Python', 'Cloudflare Workers', 'Automatyzacja'],
    authors: [{ name: 'Karol Lissoń' }],
    creator: 'Karol Lissoń',
    metadataBase: new URL('https://jimbo77.com'),
    openGraph: {
        type: 'website',
        locale: 'pl_PL',
        url: 'https://jimbo77.com',
        title: 'Karol Lissoń | Full Stack Developer & Inżynier AI',
        description: 'Architekt systemów AI i automatyzacji. Edge Computing, Multi-Agent Systems i nowoczesny web development.',
        siteName: 'Karol Lissoń Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Karol Lissoń | Full Stack Developer & Inżynier AI',
        description: 'Architekt systemów AI i automatyzacji. Edge Computing, Multi-Agent Systems i nowoczesny web development.',
        creator: '@Bonzokoles',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.svg',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';

// ... (existing imports)

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <div className="relative min-h-screen flex flex-col">
                                    <Navbar />
                                    <main className="flex-1 relative">{children}</main>
                                    <Footer />
                                    <BackToTop />
                                </div>
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
