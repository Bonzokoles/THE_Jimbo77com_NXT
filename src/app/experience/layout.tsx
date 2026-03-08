import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Doświadczenie',
    description: 'Moja droga zawodowa i wykształcenie.',
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
