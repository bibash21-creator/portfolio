import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Bibash Poudel',
  description: 'Get in touch with me. Available for full-time roles, freelance projects, and collaborations. Located in Bhaktapur, Nepal.',
  openGraph: {
    title: 'Contact | Bibash Poudel',
    description: 'Contact information and inquiry form',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
