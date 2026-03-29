import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Bibash Poudel',
  description: 'Read what clients and collaborators say about working with me on web development projects.',
  openGraph: {
    title: 'Testimonials | Bibash Poudel',
    description: 'Client testimonials and feedback',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
