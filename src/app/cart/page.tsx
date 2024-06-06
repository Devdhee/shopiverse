import CartItemList from './CartItemList';

async function page() {
  return (
    <main className="mt-16 py-5 px-4 bg-white">
      <div className="container mx-auto">
        <CartItemList />
      </div>
    </main>
  );
}

export default page;
