import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Osiągnięcia',
    description: 'Osiągnięcia Karola Lissonia: mybonzo.com AI platform, Multi-Agent Systems, RAG, fine-tuning Bielik-7B, ZENON Browser.',
    keywords: ['osiągnięcia AI', 'certyfikaty developer', 'projekty AI Polska'],
};

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
