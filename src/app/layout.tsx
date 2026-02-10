import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';
import { Navbar, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui/BackToTop';
import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Karol Lissoń | Full Stack Developer & AI Engineer',
        template: '%s | Karol Lissoń',
    },
    description: 'Pasjonat technologii specjalizujący się w AI, Full Stack Development i Web3. Tworzę innowacyjne rozwiązania cyfrowe.',
    keywords: ['AI Engineer', 'Full Stack Developer', 'Web3', 'Blockchain', 'React', 'Next.js', 'Python', 'Machine Learning'],
    authors: [{ name: 'Karol Lissoń' }],
    creator: 'Karol Lissoń',
    metadataBase: new URL('https://jimbo77.org'),
    openGraph: {
        type: 'website',
        locale: 'pl_PL',
        url: 'https://jimbo77.org',
        title: 'Karol Lissoń | Full Stack Developer & AI Engineer',
        description: 'Pasjonat technologii specjalizujący się w AI, Full Stack Development i Web3.',
        siteName: 'Karol Lissoń Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Karol Lissoń | Full Stack Developer & AI Engineer',
        description: 'Pasjonat technologii specjalizujący się w AI, Full Stack Development i Web3.',
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
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans relative`} suppressHydrationWarning>
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
