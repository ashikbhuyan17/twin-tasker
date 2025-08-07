'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, ProductInput } from '@/lib/validations/productSchema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { createProduct, updateProduct } from '@/services/products';
import { Category } from '@/types';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

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
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {
      title: '',
      price: 0,
      description: '',
      categoryId: 0,
      images: ['https://placehold.co/600x400'],
    },
  });

  const selectedCategoryId = watch('categoryId');

  // Ensure initialData's categoryId is set properly
  useEffect(() => {
    if (initialData?.categoryId) {
      setValue('categoryId', initialData.categoryId);
    }
  }, [initialData, setValue]);

  const onSubmit = async (values: ProductInput) => {
    try {
      if (productId) {
        await updateProduct(productId, values);
        toast.success('Product updated!');
      } else {
        await createProduct(values);
        toast.success('Product created!');
      }
      // router.push('/product-crud');
    } catch (error) {
      toast.error('Something went wrong.');
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-lg mx-auto p-2"
    >
      <div>
        <label>Title</label>
        <Input placeholder="Enter product title" {...register('title')} />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label>Price</label>
        <Input
          type="number"
          placeholder="Enter product  price"
          {...register('price', { valueAsNumber: true })}
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label>Description</label>
        <Input
          placeholder="Enter product description"
          {...register('description')}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <Select
          value={selectedCategoryId?.toString()}
          onValueChange={(value) => setValue('categoryId', Number(value))}
        >
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
        {errors.categoryId && (
          <p className="text-red-500 text-sm">{errors.categoryId.message}</p>
        )}
      </div>

      <div>
        <label>Images (URLs)</label>
        <Input {...register(`images.0`)} />
        {errors.images && (
          <p className="text-red-500 text-sm">{errors.images.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer"
        disabled={isSubmitting}
      >
        {productId ? 'Update Product' : 'Create Product'}
      </Button>
    </form>
  );
};
