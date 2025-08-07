import ImageSection from '../_components/ImageSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { getSingleProduct } from '@/services/products';

// type PageProps = {
//   params: { id: string };
// };

const features = [
  {
    title: 'Superfast Delivery',
    description: 'Get your order delivered to your doorstep at the earliest.',
  },
  {
    title: 'Best Prices & Offers',
    description:
      'Best price destination with offers directly from the manufacturers.',
  },
  {
    title: 'Wide Assortment',
    description: 'Choose from 5000+ products across categories.',
  },
];

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: product, error } = await getSingleProduct({ productId: id });

  if (error || !product) {
    return (
      <div className="text-red-500 p-4">
        Error: {error || 'Product not found.'}
      </div>
    );
  }

  // const getProductPrice = (product: any): number => {
  //   return product.price;
  // };

  return (
    <div>
      <Breadcrumb title="Product Details" />
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="md:w-1/2 lg:mt-4 overflow-hidden">
          <ImageSection product={product} />
        </div>

        <div className="p-2 container mt-4 animate-in slide-in-from-right md:w-1/2 md:border-l lg:border-gray-100">
          <div className="sticky top-15 border-b bg-white">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">{product.title}</h3>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="flex items-center space-x-2">
                  {/* <span className="font-extrabold text-2xl">
                    ৳
                    {getProductPrice(product) % 1 === 0
                      ? getProductPrice(product)
                      : getProductPrice(product).toFixed(2)}
                  </span> */}
                </div>
                <div className="text-xs text-gray-400">
                  (Inclusive of all taxes)
                </div>
              </div>
              <Button variant="outline" className="border-primary">
                ADD TO CART
              </Button>
            </div>
          </div>

          <div className="mt-8 max-md:hidden">
            <h2 className="text-md mb-2 font-bold">Why shop from ajke?</h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-medium text-gray-700">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
