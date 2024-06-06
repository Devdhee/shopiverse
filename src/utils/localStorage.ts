export function saveCartItems(key: string, cartItems: any[]) {
  localStorage.setItem(key, JSON.stringify(cartItems.map((item) => item)));
}
