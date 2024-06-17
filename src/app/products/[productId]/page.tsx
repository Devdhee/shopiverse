import ProductPageCTA from '@/components/ProductPageCTA';
import Rating from '@/components/Rating';
import { getProduct } from '@/utils/apiCall';
import formatPrice from '@/utils/helpers';
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
    <main className="mt-16 py-12 px-4 bg-white lg:mt-0 md:px-6 lg:py-24 lg:px-20 lg:flex lg:gap-2 lg:h-fit md:py-16 container mx-auto">
      <div className="relative h-[250px] flex-1 flex items-center justify-center md:h-[350px] my-auto lg:mr-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain border-b-2 pb-12 border-primary-800 lg:border-b-0"
        />
      </div>
      <div className="pt-3 flex gap-4 flex-col flex-1 lg:border-l-2 border-text-dark-gray lg:pl-10 lg:py-8 lg:my-auto md:gap-5 lg:gap-6">
        <h1 className="font-semibold sm:text-lg text-text-dark-gray max-w-[500px] lg:text-xl">
          {title}
        </h1>
        <Rating rating={4.3} />
        <h2 className="font-bold text-text-dark-gray text-sm sm:text-base lg:text-lg">
          {formatPrice(price)}
        </h2>
        <p className="text-sm px-3 py-1 border border-text-dark-gray  font-semibold rounded-lg w-fit lg:text-base">
          {category}
        </p>
        <div className="text-sm">
          <h4 className="font-semibold mb-2 sm:text-base lg:text-lg">
            Product Description
          </h4>
          <p className="max-w-[550px] lg:text-base">{description}</p>
        </div>
        <ProductPageCTA product={product} />
      </div>
    </main>
  );
}

export default page;
