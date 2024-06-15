import Rating from '@/components/Rating';
import { getProduct } from '@/utils/apiCall';
import { Product } from '@/utils/interface';
import Image from 'next/image';

interface Params {
  params: {
    productId: string;
  };
}

async function page({ params }: Params) {
  const product: Product = await getProduct(params.productId);
  const { id, image, description, title, price, category, rating } = product;

  return (
    <main className="mt-16 py-10 px-4 bg-white lg:mt-0 md:px-6 lg:py-16 lg:px-20">
      <div className="relative h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain border-b-2 pb-3 border-primary-800"
        />
      </div>
      <div className="pt-3">
        <h1 className="font-semibold">{title}</h1>
        <Rating rating={4.3} />
      </div>
    </main>
  );
}

export default page;
