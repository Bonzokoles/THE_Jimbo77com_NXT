import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Osiągnięcia',
    description: 'Moje certyfikaty, nagrody i osiągnięcia.',
};

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
