import type { Metadata } from 'next';
import { Inter, Playfair_Display, Caveat } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fisayo - FSlens',
  description: 'Taking videography to the next level.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-black text-white antialiased font-sans" suppressHydrationWarning>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

