import { Star } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';
import { Product } from '@/utils/interface';

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  const { title, description, rating, price, category, image } = product;

  return (
    <div className="flex flex-col max-w-[180px] overflow-hidden">
      <div className="relative px-3 py-5 bg-background-white mb-3 rounded-md h-[340px] flex items-center">
        <img src={image} alt="" width={150} height={100} className="mx-auto" />
        <div className="flex gap-2 absolute bg-background-white bottom-3 px-2 rounded-xl py-1">
          <span>{rating.rate}</span>
          <Star />({rating.count})
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

      <div className="mt-5 space-x-2">
        <Button variant="secondarySm"> View</Button>
        <Button variant="sm"> Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
