import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Skontaktuj się ze mną w sprawie współpracy i możliwości.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
