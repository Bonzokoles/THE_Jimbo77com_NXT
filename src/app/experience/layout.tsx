import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doświadczenie',
  description:
    'Doświadczenie zawodowe Karola Lissonia: JIMBO Inc, Meble Pumo, freelance IT, projektowanie 3D. Liceum Plastyczne, Akademia Sztuk Użytkowych.',
  keywords: [
    'doświadczenie zawodowe',
    'developer doświadczenie',
    'projektowanie mebli',
    'AI engineer career',
  ],
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
