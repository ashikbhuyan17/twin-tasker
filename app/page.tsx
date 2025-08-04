import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <>
      <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-lg font-semibold">TwinTasker</h1>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/tic-tac-toe/setup">Assignment-1</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/product-crud">Assignment-2</Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
