import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <>
      <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
        <div className="w-full md:max-w-7xl mx-auto flex justify-between items-center px-1 md:px-4 py-3">
          <h1 className="text-sm md:text-lg font-semibold">TwinTasker</h1>
          <div className="flex gap-1 md:gap-3">
            <Button asChild variant="outline" className="hover:bg-primary">
              <Link
                href="/assignment-1/tic-tac-toe/setup"
                className="max-sm:text-sm"
              >
                Assignment-1
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:bg-primary">
              <Link href="/assignment-2/products" className="max-sm:text-sm ">
                Assignment-2
              </Link>
            </Button>
          </div>
        </div>
      </nav>
      <div className="flex gap-3 min-h-[calc(100vh-60px)] justify-center items-center w-full">
        <Button
          asChild
          variant="outline"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] hover:bg-primary hover:text-white"
        >
          <Link
            href="/assignment-1/tic-tac-toe/setup"
            className="font-semibold"
          >
            Assignment-1
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-[150px] h-[150px]  md:w-[200px] md:h-[200px] hover:bg-primary hover:text-white"
        >
          <Link href="/assignment-2/products">Assignment-2</Link>
        </Button>
      </div>
    </>
  );
}
