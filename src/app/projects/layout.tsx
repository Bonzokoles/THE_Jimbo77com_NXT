import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projekty',
    description: 'Portfolio projektów Karola Lissonia: AI Workers, automatyzacja, web development, Cloudflare Edge, React/Next.js. Polska.',
    keywords: ['projekty AI', 'portfolio developer', 'Cloudflare Workers projekty', 'React projekty', 'automatyzacja AI'],
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
