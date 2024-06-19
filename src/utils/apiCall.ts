const API_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  const data = res.json();
  return data;
}

export async function getProduct(productId: string) {
  const res = await fetch(`${API_URL}/products/${productId}`);
  const data = res.json();
  return data;
}

export async function getProductsInCategory(category: string) {
  const res = await fetch(`${API_URL}/products/category/${category}`);
  const data = res.json();
  return data;
}
