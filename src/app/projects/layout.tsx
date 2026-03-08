import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projekty',
    description: 'Portfolio moich projektów i prac technicznych.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
