import { Button } from '@/components/ui/button';
import {
  getCategories,
  getProduct,
  getTotalProduct,
} from '@/services/products';
import { Category, Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import topImg from '../../../public/file.svg';
import defaultImg from '../../../public/default.png';
import CustomPagination from './_components/Pagination';
import { ArrowLeft, FilePenLine, PackagePlus } from 'lucide-react';
import { ProductDeleteButton } from './_components/ProductDeleteButton';

interface Props {
  searchParams: { category?: string; search?: string; page?: string };
}

export default async function ProductList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the searchParams promise to get the actual filter object
  const filters = await searchParams;
  // const selectedCategory = searchParams?.category ?? '';
  // const search = searchParams?.search ?? '';
  // const currentPage = Number(searchParams?.page ?? '0');
  // const limit = 30;
  const selectedCategory = (filters.category as string) ?? '';
  const search = (filters.search as string) ?? '';
  const currentPage = Number(filters.page ?? '0'); // Default to page 1
  const limit = 30;
  const offset = currentPage;

  const [products, categories, totalProduct] = await Promise.all([
    getProduct({
      categorySlug: selectedCategory,
      search,
      offset,
      limit,
    }),
    getCategories(),
    getTotalProduct(),
  ]);

  const total = totalProduct?.data?.length + 1 || 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <section className="lg:container mx-auto px-1 md:space-y-10">
      {/* Top Bar */}
      <section className="w-full shadow-sm bg-white sticky top-0 z-50">
        <div className="md:max-w-7xl mx-auto md:flex md:justify-between md:items-center md:px-4 py-3">
          <div className="w-2/5 flex items-center gap-x-4">
            <div className="flex gap-x-1 items-center">
              <div className="bg-white flex justify-center items-center shadow rounded-full h-8 w-8 cursor-pointer">
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </div>
              {/* <p>Home</p> */}
            </div>
            <h1 className="text-lg font-semibold max-md:hidden ">
              Product List
            </h1>
          </div>
          <div className="flex gap-3 w-full">
            <form method="GET" className="flex gap-2 w-full ">
              <div className="w-full">
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  defaultValue={search}
                  className="w-full border px-3 py-2 rounded-md text-sm"
                />
                <input
                  type="hidden"
                  name="category"
                  value={`${selectedCategory}`}
                />
              </div>
              <Button
                type="submit"
                variant="outline"
                className=" bg-primary text-white text-sm"
              >
                Search
              </Button>
            </form>
            <Button asChild variant="outline" className="bg-primary text-white">
              <Link href="products/create">
                <span className="md:hidden block">
                  <PackagePlus />
                </span>{' '}
                <span className="md:block hidden">Create</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="flex items-start space-x-2 md:space-x-5">
        {/* Sidebar */}
        <div className="w-[83px] md:w-[300px] sticky top-20 overflow-y-auto min-h-[calc(100vh-100px)] border-1 border-gray-200 rounded-md">
          <div className="max-h-[calc(100vh-60px)] overflow-y-scroll">
            {/* Top Picks */}
            <Link
              href={`?category=&search=${search}&page=${currentPage}`}
              className={`flex items-center gap-2 max-md:flex-col px-2 py-2 md:py-4 ${
                selectedCategory === ''
                  ? 'bg-[#E1F7D3] border-r-2 md:border-r-4 border-r-[#9DE76E]'
                  : ''
              }`}
            >
              <Image
                className="px-2 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src={topImg}
                alt="Top Picks"
                width={40}
                height={40}
              />
              <p className="text-center max-md:text-[10px]">Top Picks</p>
            </Link>

            {categories?.data?.map((cat: Category) => (
              <Link
                key={cat.id}
                href={`?category=${cat.slug}&search=${search}&page=${currentPage}`}
                className={`flex items-center gap-2 max-md:flex-col px-2 py-2 md:py-4 ${
                  selectedCategory === cat.slug
                    ? 'bg-[#E1F7D3] border-r-2 md:border-r-4 border-r-[#9DE76E]'
                    : ''
                }`}
              >
                <Image
                  className="px-2 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  src={cat.image ?? defaultImg}
                  alt={cat.name}
                  width={40}
                  height={40}
                />
                <p className="text-center max-md:text-[10px]">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Product List */}
        {products?.data?.length > 0 ? (
          <div className="w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 max-md:pt-4 gap-2 md:gap-4 w-full pb-10">
              {products?.data?.map((product: Product) => (
                <div
                  key={product.id}
                  className="group shadow-md rounded-md p-2 duration-300 ease-in-out hover:shadow-xl cursor-pointer"
                >
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      id={`image-display-${product.id}`}
                      className=" rounded-sm object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      priority
                    />
                    {/* On Sale and Discount Badges */}
                    <div className="absolute top-2 bg-black right-0 space-y-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-[10px] py-[1px] px-1">
                        <Link href={`products/edit/${product.id}`}>
                          <FilePenLine className="w-5 h-5 text-primary" />
                        </Link>
                      </p>
                      <p className="text-[10px] py-[1px] px-1">
                        <ProductDeleteButton productId={product.id} />
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`products/${product.id}`}
                    className="space-y-2 flex flex-col justify-between h-[75px] "
                  >
                    <p className="min-h-[40px] text-sm font-semibold pt-1">
                      {product.title.length > 30
                        ? product.title.substring(0, 30) + '...'
                        : product.title}
                    </p>
                    <div className="flex items-center">
                      <p className="w-full">
                        <span className="text-[#EA3B02] font-bold max-md:text-sm">
                          ${product.price.toFixed(2)}
                        </span>
                      </p>
                      <button className="border-1 max-md:text-sm border-red-300  px-2 rounded-md font-medium uppercase w-[90px] cursor-pointer">
                        add
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              category={selectedCategory}
              search={search}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
