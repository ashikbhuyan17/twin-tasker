import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../globals.css';
import { Providers } from './providers';
import { ArrowLeft, Link } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tic-Tac-Toe Game',
  description: 'A modern Tic-Tac-Toe game built with Next.js and Redux Toolkit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
