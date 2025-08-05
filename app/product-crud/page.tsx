'use client';
import { Product } from '@/types';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define a type for the product data

const products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Brown Bear Printed Sweater',
  //     price: 28.0,
  //     originalPrice: 35.0,
  //     images: [
  //       'https://themes12.anvanto.com/super/themes/birdwings/90-home_default/brown-bear-printed-sweater.jpg',
  //       'https://themes12.anvanto.com/super/themes/birdwings/91-home_default/brown-bear-printed-sweater.jpg',
  //       'https://themes12.anvanto.com/super/themes/birdwings/92-home_default/brown-bear-printed-sweater.jpg',
  //       'https://themes12.anvanto.com/super/themes/birdwings/93-home_default/brown-bear-printed-sweater.jpg',
  //     ],
  //     discount: 20,
  //   },
  {
    id: 4,
    title: 'Handmade Fresh Table',
    slug: 'handmade-fresh-table',
    price: 687,
    description: 'Andy shoes are designed to keeping in...',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://placehold.co/600x400',
      slug: 'others',
    },
    images: [
      //   'https://placehold.co/600x400',
      //   'https://placehold.co/600x400',
      //   'https://placehold.co/600x400',
      'https://themes12.anvanto.com/super/themes/birdwings/90-home_default/brown-bear-printed-sweater.jpg',
      'https://themes12.anvanto.com/super/themes/birdwings/91-home_default/brown-bear-printed-sweater.jpg',
      'https://themes12.anvanto.com/super/themes/birdwings/92-home_default/brown-bear-printed-sweater.jpg',
      'https://themes12.anvanto.com/super/themes/birdwings/93-home_default/brown-bear-printed-sweater.jpg',
    ],
  },
];

const FeaturedProducts: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([]);

  // Initialize the current image index for all products to 0
  useEffect(() => {
    setCurrentImageIndex(Array(products.length).fill(0));
  }, []);

  const handleMouseOver = (productIndex: number, imageIndex: number) => {
    const newImageIndexes = [...currentImageIndex];
    newImageIndexes[productIndex] = imageIndex; // Set the correct image index
    setCurrentImageIndex(newImageIndexes);
  };

  const handleMouseLeave = (productIndex: number) => {
    const newImageIndexes = [...currentImageIndex];
    newImageIndexes[productIndex] = 0; // Reset to first image
    setCurrentImageIndex(newImageIndexes);
  };

  return (
    <section className="container mx-auto py-8">
      <div className=" uppercase flex justify-between mb-2 p-1">
        <p className="font-bold  text-center tracking-wide">
          Featured Products
        </p>
        <Image
          src="https://themes12.anvanto.com/super/themes/birdwings/93-home_default/brown-bear-printed-sweater.jpg"
          alt="Brown Bear Printed Sweater"
          width={400}
          height={300}
        />
        <p className="font-semibold text-center text-gray-500 tracking-wide">
          <span className="border-b-2 border-gray-400">see</span> more
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4">
        {products.map((product, productIndex) => (
          <div
            key={product.id}
            className="group hover:shadow-md p-2 duration-300 ease-in-out"
          >
            <div className="image-container relative h-[203.75px] mx-auto">
              <img
                id={`image-display-${product.id}`}
                className="w-full h-full transition-opacity duration-300 rounded-md"
                src={product.images[currentImageIndex[productIndex]]}
                alt={product.name}
              />

              {/* Hover areas for images (divided into equal sections) */}
              <div className="absolute top-0 left-0 h-full w-full flex">
                {product.images.map((_, imageIndex) => (
                  <div
                    key={imageIndex}
                    onMouseOver={() =>
                      handleMouseOver(productIndex, imageIndex)
                    }
                    onMouseLeave={() => handleMouseLeave(productIndex)}
                    className="flex-1 cursor-pointer"
                  ></div>
                ))}
              </div>

              {/* On Sale and Discount Badges */}
              {/* <div className="absolute top-0 left-0 space-y-2">
                <p className="border border-black text-white bg-black text-[10px] py-[1px] px-1 rounded-md uppercase">
                  on sale
                </p>
                <p className="border border-black text-white w-[30px] bg-black text-[10px] py-[1px] px-1 rounded-md uppercase">
                  {product.discount}%
                </p>
              </div> */}

              {/* Search icon - visible on hover */}
              <div className="absolute top-[10px] right-[10px] space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                <p className="bg-inherit text-gray-300 bg-gray-300 text-[10px] py-[1px] px-1 rounded-md uppercase text-5xl">
                  <i className="fas fa-search text-[17px]"></i>
                </p>
              </div>
            </div>

            {/* Border container for lines */}
            <div className="border-container flex justify-between items-center w-full border-gray-300 mx-auto mt-1">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`border-segment w-full h-full cursor-pointer  ${
                    currentImageIndex[productIndex] === index
                      ? 'group-hover:border-[#d1dfd7] group-hover:border-b-2'
                      : 'border-transparent'
                  }`}
                ></div>
              ))}
            </div>

            {/* Product info and CTA */}
            <div className="space-y-2 mt-2 ">
              <p className="max-h-[40px]">
                {product.title.length > 30
                  ? product.title.substring(0, 30) + '...'
                  : product.title}
              </p>
              <p className="pb-2">
                <span className="text-[#EA3B02] font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="font-bold line-through text-gray-400">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <button className="border-2 border-gray-200 py-1 px-2 rounded-md font-medium uppercase w-full">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
