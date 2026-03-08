import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Umiejętności',
    description: 'Moje umiejętności techniczne, stos technologiczny i narzędzia.',
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
