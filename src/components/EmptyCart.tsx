import Link from 'next/link';

function EmptyCart() {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <p className="font-semibold text-primary-navy-blue sm:text-lg md:text-xl lg:text-2xl text-center">
        Your cart is empty. Contine{' '}
        <Link href="/">
          <span className="underline text-secondary-warm-yellow hover:text-secondary-warm-yellow/90">
            shopping
          </span>
        </Link>{' '}
        to add items to cart
      </p>
    </div>
  );
}

export default EmptyCart;
