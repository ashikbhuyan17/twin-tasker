'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types'; // Assuming this is where your Product type is

interface ProductImageGalleryProps {
  product: Product;
}

export default function ProductImageGallery({
  product,
}: ProductImageGalleryProps) {
  console.log('🚀 ~ ProductImageGallery ~ product:', product);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseOver = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <div className="group p-2 duration-300 ease-in-out hover:shadow-md">
      <div className="image-container relative mx-auto h-[203.75px]">
        <Image
          id={`image-display-${product.id}`}
          className="h-full w-full rounded-md object-cover transition-opacity duration-300"
          src={product.images[currentImageIndex]}
          alt={product.title}
          width={400}
          height={300}
          priority
        />

        {/* Hover areas for images */}
        <div className="absolute left-0 top-0 flex h-full w-full">
          {product.images.map((_, index) => (
            <div
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
              className="flex-1 cursor-pointer"
            ></div>
          ))}
        </div>

        {/* Badges and Icons */}
        {/* <div className="absolute left-2 top-2 space-y-2">
          {product.discount && (
            <p className="rounded-md border border-black bg-black px-1 py-[1px] text-[10px] uppercase text-white">
              on sale
            </p>
          )}
          {product.discount && (
            <p className="w-[30px] rounded-md border border-black bg-black px-1 py-[1px] text-[10px] uppercase text-white">
              {product.discount}%
            </p>
          )}
        </div> */}

        {/* Search icon - visible on hover */}
        <div className="absolute right-2 top-2 space-y-2 opacity-0 transition-opacity duration-2000 group-hover:opacity-100">
          <div className="rounded-md bg-gray-300 p-1 text-[10px] text-gray-800">
            <i className="fas fa-search text-[17px]"></i>
          </div>
        </div>
      </div>

      {/* Border container for lines - MOVED HERE */}
      <div className="border-container mx-auto mt-1 flex w-full items-center justify-between border-gray-300">
        {product.images.map((_, index) => (
          <div
            key={index}
            className={`border-segment h-full w-full cursor-pointer ${
              currentImageIndex === index
                ? 'group-hover:border-b-2 group-hover:border-[#d1dfd7]'
                : 'border-transparent'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
