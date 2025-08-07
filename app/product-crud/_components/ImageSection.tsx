'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types';

// interface ProductImage {
//   link: string;
//   isThumb?: boolean;
// }
interface ImageSectionProps {
  product: Product;
}

const ImageSection = ({ product }: ImageSectionProps) => {
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || ''
  );

  return (
    <>
      {/* Desktop */}
      <div className=" flex flex-col items-center">
        <div className="h-[500px] w-[500px] overflow-hidden rounded-md bg-cover bg-center bg-no-repeat">
          {product.images?.map((image, index) => (
            <Image
              key={index}
              src={selectedImage}
              alt={product.title || 'Product Image'}
              width={500}
              height={500}
              className={cn(
                'mb-4 h-full w-full border-gray-200 object-contain transition-opacity duration-500 ease-in-out',
                selectedImage === image ? 'block' : 'hidden'
              )}
            />
          ))}
        </div>

        <br />

        <Carousel opts={{ align: 'start' }} className="w-[80%]">
          <CarouselContent>
            {product.images?.map((image, i) => (
              <CarouselItem
                key={i}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <CardContent className="relative flex aspect-square cursor-pointer items-center justify-center p-0">
                  <button
                    type="button"
                    className={cn(
                      'relative overflow-hidden rounded-md border-2',
                      selectedImage === image
                        ? 'border-primary'
                        : 'border-gray-100'
                    )}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={image}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-full w-full border-gray-200"
                    />
                  </button>
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="disabled:hidden" />
          <CarouselNext className="disabled:hidden" />
        </Carousel>
      </div>

      {/* Mobile */}
      {/* <div className="flex md:hidden flex-col items-center">
        <Carousel
          opts={{ align: 'start' }}
          className="h-[420px] w-full bg-cover bg-center bg-no-repeat p-0"
        >
          <CarouselContent>
            {product.images?.map((image, i) => (
              <CarouselItem
                key={image.link}
                className="lg:basis-1/1 flex items-center justify-center"
              >
                <Image
                  src={image.link}
                  alt={`Thumbnail ${i + 1}`}
                  width={450}
                  height={420}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex space-x-2 py-3">
          {Array.from({ length: product.images.length }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                'h-2 w-2 cursor-pointer rounded-full transition-all',
                current === index ? 'bg-black w-2 h-2' : 'bg-gray-300'
              )}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                backgroundColor:
                  current === index ? 'rgba(0, 0, 0, 0.705)' : '#ddd',
                width: 8,
                height: 8,
              }}
            />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default ImageSection;
