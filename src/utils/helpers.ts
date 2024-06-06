export const formatPrice = (amount: number): string => {
  return Intl.NumberFormat('USA', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export default formatPrice;
