import Button from '@/components/Button';
import Image from 'next/image';
import heroImg from '/public/hero-img.png';

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

export default function Home() {
  return (
    <main>
      <div className="mt-16 py-20 bg-secondary-soft-gray lg:mt-0 lg:h-[90vh] lg:py-0">
        <div className="container mx-auto flex flex-col gap-2 justify-center md:flex-row items-center h-full px-4 md:px-6 lg:px-8">
          <div className="space-y-3 text-center md:flex-1 md:text-left md:space-y-5">
            <h1 className="text-4xl font-bold text-primary-navy-blue md:text-5xl text-center max-w-96 md:max-w-[500px] md:text-left lg:text-7xl lg:max-w-[650px]">
              Discover the Best Deals of the Season!
            </h1>
            <h3 className="text-priimary-navy-blue font-semibold text-center md:text-left md:text-lg lg:text-xl">
              Shop Now and Save Big on Your Favorite Products.
            </h3>
            <Button variant="primary">Start Exploring</Button>
          </div>
          <div className="px-2 md:flex-1">
            <Image src={heroImg} alt="product card for a pair of shoes" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-3">
        {categoryData.map((category) => (
          <div key={category.title} className="relative rounded-md py-10">
            HI
            <Image
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
