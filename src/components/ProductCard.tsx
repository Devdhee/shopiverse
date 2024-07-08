import { Star } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/utils/interface';
import ProductCardCTA from './ProductCardCTA';
import formatPrice from '@/utils/helpers';

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  const { title, rating, price, category, image } = product;

  return (
    <div className="flex flex-col w-full max-w-[270px] lg:max-w-[320px] overflow-hidden py-6">
      <div className="relative px-3 py-5 bg-background-white mb-3 rounded-lg h-[340px] flex items-center group">
        <Image
          src={image}
          alt={title}
          width={150}
          height={100}
          className="mx-auto group-hover:scale-110 duration-500"
        />
        <div className="flex gap-1 absolute bg-background-light-gray bottom-3 px-2 rounded-xl py-1 text-text-dark-gray items-center">
          <span className="text-sm font-bold">{rating.rate}</span>
          <Star style={{ color: 'hsl(var(--primary-navy-blue))' }} size={18} />
          <span className="text-sm"> ({rating.count})</span>
        </div>
      </div>
      <ul className="divide-y-2 divide-text-light-gray space-y-2 text-text-dark-gray px-1 mt-2 lg:mb-2">
        <li className="font-semibold truncate">{title}</li>
        <li className="pt-2">
          <span className="pb-8 text-sm md:text-[16px]">{category}</span>
        </li>
        <li className="pt-2">
          <p className="font-semibold text-sm">{formatPrice(price)}</p>
        </li>
      </ul>

      <ProductCardCTA product={product} />
    </div>
  );
}

export default ProductCard;
