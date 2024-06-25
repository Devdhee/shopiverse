import { CartItemData } from '@/features/cart/cartSlice';




export function saveCartItems(key: string, cartItems: CartItemData[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(cartItems));
  }
}

export function loadCartItems(key: string) {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  return [];
}
