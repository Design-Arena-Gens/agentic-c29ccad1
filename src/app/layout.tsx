import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppProviders } from '@/components/providers/AppProviders';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EduSwap Somalia • Marketplace for Learning Resources',
  description:
    'EduSwap Somalia is the dedicated marketplace for textbooks, school supplies, and educational electronics across Somalia.',
  openGraph: {
    title: 'EduSwap Somalia',
    description:
      'Swap, sell, and discover educational resources designed for students, parents, and educators across Somalia.',
    url: 'https://agentic-c29ccad1.vercel.app',
    siteName: 'EduSwap Somalia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduSwap Somalia',
    description: 'Marketplace for educational materials within Somalia.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 antialiased`}>
        <AppProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
