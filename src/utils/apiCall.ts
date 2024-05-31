const API_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  const data = res.json();
  return data;
}

export async function getTenProducts() {
  const res = await fetch(`${API_URL}/products?limit=10`);
  const data = res.json();
  return data;
}
