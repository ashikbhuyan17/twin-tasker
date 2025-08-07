import { Breadcrumb } from '@/components/Breadcrumb';
import { ProductForm } from '../../_components/ProductForm';
import { getCategories, getSingleProduct } from '@/services/products';
import { ProductInput } from '@/types';

export default async function CreateProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product, error } = await getSingleProduct({ productId: id });
  const initialData: ProductInput = {
    title: product.title,
    price: product.price.toString(),
    description: product.description,
    categoryId: product.category?.id ?? 0, // fallback to 0 if missing
    images: product.images,
  };

  if (error || !product) {
    return (
      <div className="text-red-500 p-4">
        Error: {error || 'Product not found.'}
      </div>
    );
  }
  const { data: categories, error: catError } = await getCategories();

  if (catError) {
    return <div className="p-6 text-red-500">Error: {catError}</div>;
  }

  return (
    <div className="md:space-y-10">
      <Breadcrumb title="Update Product" />
      <ProductForm
        categories={categories}
        productId={product?.id}
        initialData={initialData}
      />
    </div>
  );
}
