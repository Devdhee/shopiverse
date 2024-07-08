import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/utils/apiCall';
import { Product } from '@/utils/interface';

interface SearchParams {
  searchParams: {
    category: string;
  };
}

async function page({ searchParams }: SearchParams) {
  const filter = searchParams?.category ?? 'all';
  const products: Product[] = await getProducts();

  let displayedProducts: Product[] = products;
  if (filter !== 'all') {
    if (filter === 'men') {
      displayedProducts = products.filter(
        (product) => product.category === "men's clothing"
      );
    } else if (filter === 'women') {
      displayedProducts = products.filter(
        (product) => product.category === "women's clothing"
      );
    } else if (filter === 'electronics') {
      displayedProducts = products.filter(
        (product) => product.category === 'electronics'
      );
    } else if (filter === 'jewelery') {
      displayedProducts = products.filter(
        (product) => product.category === 'jewelery'
      );
    }
  }

  return (
    <main className="py-5 px-4 bg-background-light-gray lg:mt-0 md:px-6 lg:py-16 lg:px-20">
      <div className="container mx-auto xl:px-16">
        <div className="mb-5 lg:mt-8">
          <h2 className="text-sm font-semibold text-text-medium-gray mb-3 lg:text-base">
            Categories
          </h2>
          <Filter />
        </div>

        <section className=" py-6 md:py-8 lg:py-10 scroll-smooth">
          <h1 className="mb-3 font-semibold text-text-medium-gray lg:text-lg uppercase">
            {filter}
            <span className="text-sm font-light lowercase">
              {' '}
              ({displayedProducts.length} products found)
            </span>
          </h1>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-3 gap-y-12 lg:gap-y-24 justify-items-center w-full">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default page;
