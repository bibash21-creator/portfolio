import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Bibash Poudel',
  description: 'Download my resume. View my skills, experience, and professional achievements as a Full Stack Developer.',
  openGraph: {
    title: 'Resume | Bibash Poudel',
    description: 'Download professional resume and qualifications',
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
