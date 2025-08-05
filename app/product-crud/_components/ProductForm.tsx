'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, ProductInput } from '@/lib/validations/productSchema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { createProduct, updateProduct } from '@/services/products';
import { Category } from '@/types';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductFormProps {
  initialData?: ProductInput;
  productId?: number;
  categories: Category[];
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  productId,
  categories,
}) => {
  const router = useRouter();

  const [categoryId, setCategoryId] = useState<string>(
    initialData?.categoryId?.toString() || ''
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {
      title: '',
      price: 0,
      description: '',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
  });

  const onSubmit = async (values: ProductInput) => {
    try {
      const finalValues = {
        ...values,
        categoryId: Number(categoryId), // override categoryId from select
      };

      if (productId) {
        await updateProduct(productId, finalValues);
        toast.success('Product updated!');
      } else {
        const res = await createProduct(finalValues);
        toast.success('Product created!');
      }

      // router.push('/products');
    } catch (error) {
      toast.error('Something went wrong.');
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-lg mx-auto"
    >
      <div>
        <label>Title</label>
        <Input {...register('title')} />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label>Price</label>
        <Input type="number" {...register('price', { valueAsNumber: true })} />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label>Description</label>
        <Input {...register('description')} />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <Select value={categoryId} onValueChange={setCategoryId}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id.toString()}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label>Images (URLs)</label>
        <Input {...register(`images.0`)} />
        {errors.images && (
          <p className="text-red-500 text-sm">{errors.images.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {productId ? 'Update Product' : 'Create Product'}
      </Button>
    </form>
  );
};
