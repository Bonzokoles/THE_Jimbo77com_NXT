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
  description:
    'Karol Lissoń — Architekt systemów AI i automatyzacji z Polski. Edge Computing, Multi-Agent Systems, projektowanie 3D i nowoczesny web development.',
  keywords: [
    'Inżynier AI',
    'Full Stack Developer',
    'Edge Computing',
    'Multi-Agent Systems',
    'React',
    'Next.js',
    'Python',
    'Cloudflare Workers',
    'Automatyzacja',
    'programista Polska',
    'developer AI Polska',
    'projektowanie 3D',
    'Blender',
    'PRO100',
    'web developer freelance',
    'twórca stron internetowych',
  ],
  authors: [{ name: 'Karol Lissoń' }],
  creator: 'Karol Lissoń',
  metadataBase: new URL('https://jimbo77.com'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://jimbo77.com',
    title: 'Karol Lissoń | Full Stack Developer & Inżynier AI',
    description:
      'Architekt systemów AI i automatyzacji. Edge Computing, Multi-Agent Systems i nowoczesny web development.',
    siteName: 'Karol Lissoń Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karol Lissoń | Full Stack Developer & Inżynier AI',
    description:
      'Architekt systemów AI i automatyzacji. Edge Computing, Multi-Agent Systems i nowoczesny web development.',
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.ico', sizes: 'any' },
    ],
    apple: '/assets/apple-touch-icon.png',
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
import { PersonJsonLd, FaqJsonLd } from '@/components/seo/JsonLd';
import { portfolioData } from '@/data/portfolio';

// ... (existing imports)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Local SEO geo meta tags */}
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Polska" />
        <meta name="geo.position" content="51.9194;19.1451" />
        <meta name="ICBM" content="51.9194, 19.1451" />
        {/* AI crawler friendly description */}
        <meta
          name="ai-description"
          content="Portfolio Karola Lissonia - Full Stack Developer & Inżynier AI z Polski. Specjalizacja: Cloudflare Workers, Multi-Agent AI Systems, React/Next.js, Python, projektowanie 3D (PRO100, Blender). Dostępny do współpracy."
        />
        {/* Structured Data */}
        <PersonJsonLd />
        <FaqJsonLd faqs={portfolioData.faqs} />
        {/* Umami Analytics */}
        <script defer src="https://analytics.mybonzo.com/script.js" data-website-id="ddcd9b63-7ffd-4024-a9b9-a5b02ad9e002" />
      </head>
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
