'use client';

import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from '@/features/cart/cartSlice';
import Button from './Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import formatPrice from '@/utils/helpers';
import { getUserData } from '@/features/user/userSlice';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function CartOverview() {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const { address, mobileNumber } = useAppSelector(getUserData);
  const router = useRouter();

  const salesTax = totalCartPrice * 0.11;
  const total = salesTax + totalCartPrice;
  const inCompleteForm = !address || !mobileNumber;

  function handlePlaceOrder() {
    toast.success('Your Order has been placed!');
    router.push('/');
    dispatch(clearCart());
  }

  if (cart.length > 0)
    return (
      <section className="px-4 sm:px-6 sm:py-10 md:px-12 md:py-16 py-7 bg-white rounded-xl lg:px-6">
        <div className="flex justify-between items-center border-primary-navy-blue/60 pb-3 border-b-2">
          <h2 className="font-semibold text-lg tracking-wide text-text-medium-gray">
            My order
          </h2>
          <Button variant="secondarySm" href="/cart">
            Edit
          </Button>
        </div>
        <ul className="space-y-8 mt-10 ">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-5 border-primary-navy-blue/40 pb-8 border-b"
            >
              <div className="relative flex-1/2 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={50}
                  className="w-30"
                />
              </div>
              <div className="flex-1 space-y-1 overflow-hidden">
                <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                <p className="text-text-dark-gray text-sm">
                  Qty: {item.quantity}{' '}
                </p>
                <p className="text-text-dark-gray text-sm font-semibold">
                  {formatPrice(item.price)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col">
          <p className="text-text-dark-gray text-sm flex justify-between">
            Cart Subtotal
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(totalCartPrice)}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm mt-3 flex justify-between">
            VAT (11%)
            <span className="text-text-dark-gray text-sm font-semibold">
              {formatPrice(salesTax)}
            </span>
          </p>
          <p className="text-text-dark-gray text-sm mt-3 flex justify-between">
            Delivery
            <span className="text-text-dark-gray text-sm font-semibold">
              Free
            </span>
          </p>
          <p className="text-text-dark-gray font-semibold flex justify-between my-8 border-t-2 border-primary-navy-blue/50 pt-3">
            Total
            <span className="text-text-dark-gray font-semibold">
              {formatPrice(total)}
            </span>
          </p>

          {!inCompleteForm && (
            <button
              className="inline-block rounded-lg bg-secondary-warm-yellow font-bold tracking-wide text-background-white transition-colors duration-300 hover:bg-secondary-warm-yellow/90  focus:outline-none  disabled:cursor-not-allowed border border-secondary-warm-yellow px-3.5 py-2.5 md:px-6 md:py-3.5 text-center"
              disabled={inCompleteForm}
              onClick={() => handlePlaceOrder()}
            >
              PLACE ORDER
            </button>
          )}
        </div>
      </section>
    );
}

export default CartOverview;
