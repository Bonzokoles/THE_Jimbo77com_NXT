import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umiejętności',
  description:
    'Umiejętności techniczne Karola Lissonia: Python, TypeScript, React, Next.js, AI/ML, Cloudflare Workers, Blender, PRO100, Photoshop.',
  keywords: [
    'umiejętności programista',
    'Python developer',
    'React expert',
    'AI engineer skills',
    'Blender 3D',
  ],
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
