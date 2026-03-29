import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Bibash Poudel',
  description: 'Learn about me - a passionate Full Stack Developer with 1+ years of experience building interactive, user-centric digital products.',
  openGraph: {
    title: 'About | Bibash Poudel',
    description: 'About my journey and passion for web development',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
