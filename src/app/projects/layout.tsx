import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Bibash Poudel',
  description: 'Portfolio of 9+ web development projects. Full stack applications showcasing React, Next.js, Node.js and modern web technologies.',
  openGraph: {
    title: 'Projects | Bibash Poudel',
    description: 'Full stack development projects and case studies',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
