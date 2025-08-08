'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../globals.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
              <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <h1 className="text-lg font-semibold">TwinTasker</h1>
                <div className="flex gap-3">
                  <Button asChild variant="outline">
                    <Link href="/">Home</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/assignment-2/products">Assignment-2</Link>
                  </Button>
                </div>
              </div>
            </nav>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
