import ProductCard from '@/components/ProductCard';
import { getProductsInCategory } from '@/utils/apiCall';
import { Product } from '@/utils/interface';

interface Params {
  params: {
    categoriesSlug: string;
  };
}

async function page({ params }: Params) {
  const products: Product[] = await getProductsInCategory(
    params.categoriesSlug
  );

  const string = params.categoriesSlug;
  const title = string.replace(/%20/g, ' ').toUpperCase();

  return (
    <main className="mt-16 py-5 px-4 bg-background-light-gray lg:mt-0 md:px-6 lg:py-16 lg:px-20">
      <div className="container mx-auto xl:px-16">
        <h1 className="mb-5 md:mb-8 lg:mb-10 font-semibold text-text-medium-gray lg:text-lg">
          {title}{' '}
          <span className="text-sm font-light">
            {' '}
            ({products.length} products found)
          </span>
        </h1>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-3 gap-y-12 lg:gap-y-24 justify-items-center w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
