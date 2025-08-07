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
              <Link href="/products">Assignment-2</Link>
            </Button>
          </div>
        </div>
      </nav>
      <div className="flex gap-3 min-h-screen justify-center items-center w-full">
        <Button
          asChild
          variant="outline"
          className="w-[200px] h-[200px] hover:bg-red-500 hover:text-white"
        >
          <Link href="/tic-tac-toe/setup" className="font-semibold">
            Assignment-1
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-[200px] h-[200px] hover:bg-red-500 hover:text-white"
        >
          <Link href="/assignment-2/products">Assignment-2</Link>
        </Button>
      </div>
    </>
  );
}
