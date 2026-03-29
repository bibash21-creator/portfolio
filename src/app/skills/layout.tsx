import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Bibash Poudel',
  description: 'Explore my technical skills across frontend, backend, AI/ML, design and creative coding. Journey from 2021 to 2025.',
  openGraph: {
    title: 'Skills | Bibash Poudel',
    description: 'Technical skills and expertise timeline',
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
