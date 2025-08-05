import Image from 'next/image';
import ImageSection from '../_components/ImageSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  tags?: string; // add tags to match your logic
};

type Feature = {
  // icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    // icon: '/assets/10_minute_delivery.png',
    title: 'Superfast Delivery',
    description: 'Get your order delivered to your doorstep at the earliest.',
  },
  {
    // icon: '/assets/Best_Prices_Offers.png',
    title: 'Best Prices & Offers',
    description:
      'Best price destination with offers directly from the manufacturers.',
  },
  {
    // icon: '/assets/10_minute_delivery.png',
    title: 'Wide Assortment',
    description: 'Choose from 5000+ products across categories.',
  },
];

interface ProductDetailsProps {
  product: Product;
}

const product = {
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
    'https://cdn.ajke.app/cdn-cgi/image/fit=scale-down,metadata=none,dpr=1.5,width=500,height=500,f=avif/ajke/images/products/1738086316557.png',
    'https://placehold.co/600x400',
    'https://cdn.ajke.app/cdn-cgi/image/fit=scale-down,metadata=none,dpr=1.5,width=500,height=500,f=avif/ajke/images/products/1738086316557.png',
  ],
};
const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const getProductPrice = (product: Product): number => {
    return product.price;
  };

  return (
    <div>
      <Breadcrumb title=" Product Details" />
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="md:w-1/2 lg:mt-4">
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
                  <span className="font-extrabold text-2xl">
                    ৳
                    {getProductPrice(product) % 1 === 0
                      ? getProductPrice(product)
                      : getProductPrice(product).toFixed(2)}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  (Inclusive of all taxes)
                </div>
              </div>
              <Button variant="outline" className="border-primary ">
                ADD TO CART
              </Button>
            </div>
          </div>

          {/* Why Shop Section */}
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

          {/* ProductDetailsSection replacement */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-gray-700">{product.description}</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
