import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience & Education | Bibash Poudel',
  description: 'View my professional experience and educational background. Full Stack Developer with 1+ years of experience.',
  openGraph: {
    title: 'Experience & Education | Bibash Poudel',
    description: 'Professional experience and educational achievements',
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
