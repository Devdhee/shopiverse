import Button from '@/components/Button';
import Image from 'next/image';
import heroImg from '/public/hero-img.png';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/utils/apiCall';
import { Product } from '@/utils/interface';

const categoryData = [
  {
    title: "Men's Clothing",
    href: '/men-clothing',
    image: '/1.png',
  },
  {
    title: 'Jewellery',
    href: '/jewelleries',
    image: '/2.png',
  },
  {
    title: 'Electronics',
    href: '/electronics',
    image: '/3.png',
  },
  {
    title: "Women's Clothing",
    href: '/women-clothing',
    image: '/4.png',
  },
];

export default async function Home() {
  const products: Product[] = await getProducts();

  const bestRated = products.filter((product) => product.rating.rate >= 4.7);
  const feauturedProducts = products.slice(0, 12);

  return (
    <main className="scroll-smooth">
      <section className="mt-16 py-20 bg-secondary-soft-gray md:h-[80vh] lg:mt-0 lg:h-[80vh] lg:py-0">
        <div className="container mx-auto flex flex-col gap-2 justify-center md:flex-row items-center h-full px-4 md:px-6 lg:px-8">
          <div className="space-y-3 text-center md:flex-1 md:text-left md:space-y-5">
            <h1 className="text-4xl font-bold text-primary-navy-blue md:text-5xl text-center max-w-96 md:max-w-[500px] md:text-left lg:text-7xl lg:max-w-[650px]">
              Discover the Best Deals of the Season!
            </h1>
            <h3 className="text-priimary-navy-blue font-semibold text-center md:text-left md:text-lg lg:text-xl lg:max-w-[550px] max-w-80 mx-auto md:max-w-[400px] md:mx-0">
              Discover unbeatable deals and an incredible selection of
              top-quality items across all categories.
            </h3>
            <Button variant="primary" href="#new-arrivals">
              Start Exploring
            </Button>
          </div>
          <div className="px-2 md:flex-1">
            <Image src={heroImg} alt="product card for a pair of shoes" />
          </div>
        </div>
      </section>

      <div className="bg-background-light-gray px-1 py-16 md:py-16 lg:py-28 xl:px-24">
        <div className="container mx-auto">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-text-dark-gray md:text-3xl lg:text-4xl">
            Top Rated Products
          </h2>
          <h3 className="text-center mb-5 text-sm md:text-lg lg:text-xl md:mb-8 lg:mb-10">
            Highest Rated by Our Valued Customers
          </h3>
          <div className="px-1 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-3 gap-y-12 justify-items-center w-full">
            {bestRated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-3 md:gap-x-5 md:gap-y-6  md:py-16 lg:py-28 lg:gap-x-8 lg:gap-y-10 xl:px-24">
        {categoryData.map((category) => (
          <div
            key={category.title}
            className="relative rounded-2xl h-[120px] sm:h-[170px] md:h-[200px] sm:p-6 flex items-end py-3 px-3 md:px-8 md:py-6 lg:h-[300px] cursor-pointer"
          >
            <Image
              src={category.image}
              alt={category.title}
              quality={20}
              fill
              sizes="(max-width: 768px)"
              className="object-cover object-top rounded-2xl w-auto h-auto"
            />
            <p className="font-semibold text-sm relative z-10 text-background-white md:text-lg lg:text-xl">
              {category.title}
            </p>
          </div>
        ))}
      </div>

      <section
        className="bg-background-light-gray px-1 py-16 md:py-16 lg:py-28 xl:px-24 scroll-smooth"
        id="new-arrivals"
      >
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-text-dark-gray md:text-3xl lg:text-4xl">
          New Arrivals
        </h2>
        <h3 className="text-center mb-5 text-sm md:text-lg lg:text-xl md:mb-8 lg:mb-10">
          Discover Recently Added Products
        </h3>
        <div className="px-1 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-3 gap-y-12 lg:gap-y-24 justify-items-center w-full container">
          {feauturedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
