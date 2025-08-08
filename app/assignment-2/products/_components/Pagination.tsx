'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number; // zero-based
  totalPages: number; // total pages count (zero-based length)
}) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';
  const search = searchParams.get('search') || '';

  const createLink = (page: number) =>
    `?category=${category}&search=${search}&page=${page}`;

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    if (i === 0 || i === totalPages - 1 || Math.abs(i - currentPage) <= 1) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && i > 0) ||
      (i === currentPage + 2 && i < totalPages - 1)
    ) {
      pages.push('...');
    }
  }

  return (
    <div className="flex justify-center mb-6 space-x-1 items-center">
      <Link
        href={createLink(Math.max(0, currentPage - 1))}
        className={`px-3 py-1 text-[10px] sm:text-sm ${
          currentPage === 0 ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <ChevronLeft className="inline w-4 h-4" /> Previous
      </Link>

      {pages.map((p, idx) =>
        p === '...' ? (
          <span key={idx} className="px-3 py-1 text-[10px] sm:text-sm">
            ...
          </span>
        ) : (
          <Link
            key={idx}
            href={createLink(p as number)}
            className={`px-3 py-1 text-[10px] sm:text-sm rounded ${
              currentPage === p
                ? 'bg-gray-200 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            {(p as number) + 1} {/* Display starts from 1 */}
          </Link>
        )
      )}

      <Link
        href={createLink(Math.min(totalPages - 1, currentPage + 1))}
        className={`px-3 py-1 text-[10px] sm:text-sm ${
          currentPage === totalPages - 1 ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        Next <ChevronRight className="inline w-4 h-4" />
      </Link>
    </div>
  );
}
