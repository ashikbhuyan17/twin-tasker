'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface BreadcrumbProps {
  title: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const router = useRouter();

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </nav>
  );
};
