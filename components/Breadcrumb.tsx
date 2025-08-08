'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const router = useRouter();

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="md:max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex space-x-3 items-center">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <Button asChild variant="outline">
            <Link href="/assignment-1/tic-tac-toe/setup">Assignment-1</Link>
          </Button>
        </div>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </nav>
  );
};
