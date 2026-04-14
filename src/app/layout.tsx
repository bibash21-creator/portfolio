import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/universal/Navbar';
import Footer from '@/components/universal/Footer';
import { Anonymous_Pro } from 'next/font/google';

export const font = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bibash Poudel | Full Stack Developer & AI/ML Enthusiast',
  description:
    'Bibash Poudel is a Full Stack Developer specializing in Next.js, React, and Node.js. View my projects, skills, and experience.',
  keywords: [
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'AI/ML',
    'Web Development',
  ],
  authors: [{ name: 'Bibash Poudel' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Bibash Poudel | Full Stack Developer',
    description:
      'Portfolio showcasing full stack development projects and skills',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
