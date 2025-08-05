import { Button } from '@/components/ui/button';
import { getProduct } from '@/services/products';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductList() {
  const products = await getProduct();
  console.log('🚀 ~ ProductList ~ products:', products);

  return (
    <section className="container mx-auto  px-1 space-y-10">
      <section className="w-full shadow-sm bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-lg font-semibold">Product List</h1>
          <div className="flex gap-3">
            <Button asChild variant="outline" className="bg-primary text-white">
              <Link href="/product-crud/create">Create</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4">
        {products?.data?.map((product: Product) => (
          <div
            key={product.id}
            className="group shadow-md rounded-md p-2 duration-300 ease-in-out hover:shadow-xl cursor-pointer"
          >
            {/* Image Container with Fixed Height */}
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                id={`image-display-${product.id}`}
                className=" px-2 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src={product.images[0]}
                alt={product.title}
                fill
                priority
              />
            </div>

            <div className="space-y-4 mt-4 ">
              <p className="max-h-[40px]">
                {product.title.length > 30
                  ? product.title.substring(0, 30) + '...'
                  : product.title}
              </p>
              <div className="flex items-center">
                <p className="w-full">
                  <span className="text-[#EA3B02] font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
                <button className="border-1 border-red-300 py-[2px] px-2 rounded-md font-medium uppercase w-[90px] cursor-pointer">
                  add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
