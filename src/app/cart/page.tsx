import CartItemList from './CartItemList';

async function page() {
  return (
    <main className="py-5 px-4 bg-background-light-gray lg:mt-0 md:px-6 lg:px-8 md:py-8 lg:py-10">
      <div className="container mx-auto">
        <CartItemList />
      </div>
    </main>
  );
}

export default page;
