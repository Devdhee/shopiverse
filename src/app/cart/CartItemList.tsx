'use client';

import Button from '@/components/Button';
import EmptyCart from '@/components/EmptyCart';
import {
  declareItemQuantity,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
  increaseItemQuantity,
  removeFromCart,
} from '@/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import formatPrice from '@/utils/helpers';
import { X } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

function CartItemList() {
  const cart = useAppSelector(getCart);
  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const totalCartQuantity = useAppSelector(getTotalCartQuantity);
  const dispatch = useAppDispatch();

  const salesTax = totalCartPrice * 0.11;
  const total = salesTax + totalCartPrice;

  function handleRemoveFromCart(productId: number) {
    dispatch(removeFromCart(productId));
    toast.success('Product removed succesfully');
  }

  function handleIncreaseQuantity(productId: number) {
    dispatch(increaseItemQuantity(productId));
  }

  function handleDecreaseQuantity(productId: number) {
    dispatch(declareItemQuantity(productId));
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <div className="md:hidden border-2 rounded-md px-2 py-3 mb-5">
        <h2 className="font-semibold text-text-dark-gray mb-2">Cart Summary</h2>
        <div className="space-y-1">
          <p className="text-text-dark-gray text-sm font-semibold">
            Items:{' '}
            <span className="text-text-dark-gray text-sm font-semibold">
              {totalCartQuantity}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm font-semibold">
            Subtotal:{' '}
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(totalCartPrice)}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm font-semibold">
            VAT (11%):{' '}
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(salesTax)}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm font-bold">
            Total:{' '}
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(total)}
            </span>
          </p>
        </div>
      </div>
      <ul className="space-y-2 divide-y-2">
        {cart.map((cartItem) => (
          <li
            className="relative py-4 bg-white px-1 pt-12 overflow-hidden"
            key={cartItem.id}
          >
            <div className="flex gap-4">
              <div className="relative flex items-center w-1/4">
                <Image
                  src={cartItem.image}
                  alt={cartItem.title}
                  width={150}
                  height={80}
                  className="w-48"
                />
              </div>
              <div className="w-3/4 my-auto space-y-2">
                <p className="max-w-[250px] truncate font-semibold">
                  {cartItem.title}
                </p>
                <p>{formatPrice(cartItem.totalPrice)}</p>
                <span className="flex gap-1 items-center">
                  <Button
                    variant="round"
                    onClick={() => handleDecreaseQuantity(cartItem.id)}
                  >
                    -
                  </Button>
                  {cartItem.quantity}
                  <Button
                    variant="round"
                    onClick={() => handleIncreaseQuantity(cartItem.id)}
                  >
                    +
                  </Button>
                </span>
              </div>
            </div>
            <span className="absolute top-3 right-1 cursor-pointer">
              <X onClick={() => handleRemoveFromCart(cartItem.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartItemList;
