'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ProductSearch({
  selectedCategory,
  defaultSearch,
}: {
  selectedCategory: string;
  defaultSearch: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(defaultSearch || '');
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  // Handle search change with debounce
  useEffect(() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    setDebounceTimer(
      setTimeout(() => {
        const params = new URLSearchParams(searchParams);
        params.set('category', selectedCategory);
        params.set('search', search);
        params.set('page', '0'); // reset to first page
        router.push(`?${params.toString()}`);
      }, 100) // 1 second delay
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // Clear search instantly
  const clearSearch = () => {
    setSearch('');
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border px-3 py-2 rounded-md text-sm pr-8"
        />
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {/* <Button
        type="button"
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.set('category', selectedCategory);
          params.set('search', search);
          params.set('page', '0');
          router.push(`?${params.toString()}`);
        }}
        variant="outline"
        className="bg-primary text-white text-sm"
      >
        Search
      </Button> */}
    </div>
  );
}
