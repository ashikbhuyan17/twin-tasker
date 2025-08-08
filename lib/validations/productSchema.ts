import { z } from 'zod';
export const productSchema = z.object({
  title: z.string().min(2, 'Title is too short').max(100, 'Title too long'),
  price: z.number().min(1, 'Price must be at least 1'),
  description: z.string().min(5).max(500),
  categoryId: z.number().min(1, 'Category is required'),
  images: z.array(z.string().url({ message: 'Must be a valid URL' })).min(1),
});

export type ProductInput = z.infer<typeof productSchema>;
