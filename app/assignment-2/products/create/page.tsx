export const dynamic = 'force-dynamic';
import { getCategories } from '@/services/products';
import { ProductForm } from '../_components/ProductForm';
import { Breadcrumb } from '@/components/Breadcrumb';

export default async function CreateProductPage() {
  const { data: categories, error } = await getCategories();

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="md:space-y-10">
      <Breadcrumb title="Create New Product" />
      <ProductForm categories={categories} />
    </div>
  );
}
