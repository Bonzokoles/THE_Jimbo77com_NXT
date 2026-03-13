import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt z Karolem Lissoniem — Full Stack Developer & Inżynier AI. Współpraca, projekty AI, automatyzacja, web development. Polska.',
  keywords: [
    'kontakt developer',
    'współpraca programista',
    'zatrudnij developera',
    'freelance AI Polska',
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
