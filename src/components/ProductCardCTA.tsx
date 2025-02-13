'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Button from './Button';
import { Product } from '@/utils/interface';
import {
  addToCart,
  getCurrentQuantityById,
  removeFromCart,
} from '@/features/cart/cartSlice';
import { toast } from 'sonner';
import { clearQuantity } from '@/features/cart/productSlice';

type ProductCardCtaProps = {
  product: Product;
};

function ProductCardCTA({ product }: ProductCardCtaProps) {
  const { id, image, title, price } = product;
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    const newCartItem = {
      id,
      title,
      image,
      price,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch(addToCart(newCartItem));
    toast.success('Product added succesfully');
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(id));
    dispatch(clearQuantity(id));
    toast.success('Product removed succesfully');
  }

  return (
    <div className="mt-5 flex flex-wrap gap-1 sm:gap-2 lg:gap-4">
      <Button variant="secondarySm" href={`/products/${id}`}>
        {' '}
        View
      </Button>
      {!isInCart ? (
        <Button variant="sm" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      ) : (
        <Button variant="sm" onClick={handleRemoveFromCart}>
          Remove
        </Button>
      )}
    </div>
  );
}

export default ProductCardCTA;
