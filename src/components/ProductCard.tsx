import { Star } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';
import { Product } from '@/utils/interface';

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  const { title, rating, price, category, image } = product;

  return (
    <div className="flex flex-col w-full max-w-[350px] overflow-hidden shadow-sm">
      <div className="relative px-3 py-5 bg-background-white mb-3 rounded-lg h-[340px] flex items-center">
        <Image
          src={image}
          alt={title}
          width={150}
          height={100}
          className="mx-auto"
        />
        <div className="flex gap-1 absolute bg-background-light-gray bottom-3 px-2 rounded-xl py-1 text-text-dark-gray items-center">
          <span className="text-sm font-bold">{rating.rate}</span>
          <Star style={{ color: 'hsl(var(--primary-navy-blue))' }} size={18} />
          <span className="text-sm"> ({rating.count})</span>
        </div>
      </div>
      <ul className="divide-y-2 divide-text-light-gray space-y-1 text-text-dark-gray">
        <li className=" font-semibold truncate">{title}</li>
        <li>
          <p className="">{category}</p>
        </li>
        <li>
          <p>{price}</p>
        </li>
      </ul>

      <div className="mt-5 flex flex-wrap gap-1">
        <Button variant="secondarySm"> View</Button>
        <Button variant="sm"> Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
