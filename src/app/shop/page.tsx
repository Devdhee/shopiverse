import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/utils/apiCall';
import { Product } from '@/utils/interface';

async function page() {
  const products: Product[] = await getProducts();

  return (
    <main className="mt-16 py-5 px-4 bg-background-light-gray lg:mt-0 md:px-6 lg:py-16 lg:px-20">
      <div className="container mx-auto xl:px-16">
        <div className="mb-5 lg:mt-8">
          <h2 className="text-sm font-semibold text-text-medium-gray mb-3 lg:text-base">
            Categories
          </h2>
          <div className="flex gap-x-1 flex-wrap gap-y-2">
            <Button variant="secondarySm">All</Button>
            <Button variant="secondarySm">Men</Button>
            <Button variant="secondarySm">Women</Button>
            <Button variant="secondarySm">Jewelleries</Button>
            <Button variant="secondarySm">Electronic</Button>
          </div>
        </div>

        <section className=" py-6 md:py-8 lg:py-10 scroll-smooth">
          <h1 className="mb-3 font-semibold text-text-medium-gray lg:text-lg">
            All products{' '}
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
        </section>
      </div>
    </main>
  );
}

export default page;
