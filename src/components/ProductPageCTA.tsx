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
import { useState } from 'react';
import {
  clearQuantity,
  decreaseProductQuantity,
  getProductQuantity,
  increaseProductQuantity,
} from '@/features/cart/productSlice';

type ProductCardCtaProps = {
  product: Product;
};

function ProductPageCTA({ product }: ProductCardCtaProps) {
  const { id, image, title, price } = product;
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(getProductQuantity(id));
  console.log(quantity);

  function handleAddToCart() {
    const newCartItem = {
      id,
      title,
      image,
      price,
      quantity,
      totalPrice: price * quantity,
    };

    dispatch(addToCart(newCartItem));
    toast.success('Product added succesfully');
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(id));
    dispatch(clearQuantity(id));
    toast.success('Product removed succesfully');
  }

  function increaseQuantity() {
    dispatch(increaseProductQuantity(id));
  }

  function decreaseQuantity() {
    dispatch(decreaseProductQuantity(id));
  }

  return (
    <div className="mt-5 flex flex-wrap gap-4 sm:gap-6 md:gap-10 lg:gap-12">
      <span className="flex gap-1 items-center sm:gap-2 md:gap-3 lg:gap-4">
        <Button variant="icon" onClick={() => decreaseQuantity()}>
          -
        </Button>
        {quantity}
        <Button variant="icon" onClick={() => increaseQuantity()}>
          +
        </Button>
      </span>

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

export default ProductPageCTA;
