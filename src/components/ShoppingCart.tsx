'use client';

import { getTotalCartQuantity } from '@/features/cart/cartSlice';
import { useAppSelector } from '@/store/hooks';
import { ShoppingCart } from 'lucide-react';

function ShoppingCartIcon() {
  const cartItemsQuantity = useAppSelector(getTotalCartQuantity);

  return (
    <span className="relative">
      <ShoppingCart
        style={{ color: 'hsl(var(--background-light-gray))' }}
        size={28}
        className="hidden lg:block"
      />
      <ShoppingCart
        style={{ color: 'hsl(var(--background-light-gray))' }}
        size={18}
        className="lg:hidden"
      />
      {cartItemsQuantity > 0 && (
        <span className="absolute -top-2 text-sm bg-secondary-warm-yellow px-1 rounded-full -right-2 text-white">
          {cartItemsQuantity}
        </span>
      )}
    </span>
  );
}

export default ShoppingCartIcon;
