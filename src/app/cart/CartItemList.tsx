'use client';

import Button from '@/components/Button';
import EmptyCart from '@/components/EmptyCart';
import {
  clearCart,
  declareItemQuantity,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
  increaseItemQuantity,
  removeFromCart,
} from '@/features/cart/cartSlice';
import { clearQuantity } from '@/features/cart/productSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import formatPrice from '@/utils/helpers';
import { Trash2 } from 'lucide-react';
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
    dispatch(clearQuantity(productId));

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
    <div className="flex py-10 flex-col md:flex-row-reverse justify-between md:gap-8 px-4 md:py-10 lg:gap-10 xl:w-fit xl:mx-auto">
      <div className="border-2 rounded-xl px-4 py-6 mb-5 md:min-w-[270px] lg:max-w-[400px] flex-1 md:py-8 md:px-6 md:h-fit bg-white xl:max-w-[500px]">
        <h2 className="font-semibold text-text-dark-gray mb-2">Cart Summary</h2>
        <div className="space-y-2 md:space-y-3">
          <p className="text-text-dark-gray text-sm font-semibold flex justify-between">
            Items
            <span className="text-text-dark-gray text-sm font-semibold">
              {totalCartQuantity}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm font-semibold flex justify-between">
            Subtotal
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(totalCartPrice)}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm font-semibold flex justify-between">
            VAT (11%)
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(salesTax)}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm font-bold flex justify-between">
            Total
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(total)}
            </span>
          </p>
        </div>

        <div className="hidden md:flex gap-4 md:flex-wrap mt-8">
          <Button variant="sm" href="/checkout">
            CHECKOUT ({formatPrice(total)})
          </Button>
          <Button variant="secondarySm" onClick={() => dispatch(clearCart())}>
            CLEAR CART
          </Button>
        </div>
      </div>
      <ul className="space-y-4 mb-8 lg:flex-1 lg:max-w-[700px] xl:w-[900px]">
        {cart.map((cartItem) => (
          <li
            className="relative bg-white pt-12 overflow-hidden rounded-xl px-4 py-6 xl:w-full xl:min-h-64 xl:flex"
            key={cartItem.id}
          >
            <div className="flex gap-4 lg:gap-10">
              <div className="relative flex items-center w-1/4">
                <Image
                  src={cartItem.image}
                  alt={cartItem.title}
                  width={150}
                  height={80}
                  className="w-48"
                />
              </div>
              <div className="w-3/4 my-auto space-y-2 lg:space-y-4 lg:w-1/2">
                <p className="max-w-[250px] truncate font-semibold">
                  {cartItem.title}
                </p>
                <p>{formatPrice(cartItem.totalPrice)}</p>
                <span className="flex gap-1 items-center">
                  <Button
                    variant="icon"
                    onClick={() => handleDecreaseQuantity(cartItem.id)}
                  >
                    -
                  </Button>
                  {cartItem.quantity}
                  <Button
                    variant="icon"
                    onClick={() => handleIncreaseQuantity(cartItem.id)}
                  >
                    +
                  </Button>
                </span>
              </div>
            </div>
            <span className="absolute top-4 right-2 cursor-pointer">
              <Trash2
                onClick={() => handleRemoveFromCart(cartItem.id)}
                style={{ color: '#AA0000', cursor: 'pointer' }}
              />
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 flex-wrap md:hidden">
        <Button variant="sm" href="/checkout">
          CHECKOUT ({formatPrice(total)})
        </Button>
        <Button variant="secondarySm" onClick={() => dispatch(clearCart())}>
          CLEAR CART
        </Button>
      </div>
    </div>
  );
}

export default CartItemList;
