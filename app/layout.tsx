
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TwinTasker',
  description: 'Tic-Tac-Toe & Product CRUD App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-redeviation-bs-uid="e6ptht9s0rc">
      <body className={cn(inter.className, 'bg-gray-50 text-gray-900')}>
        <main>{children}</main>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
