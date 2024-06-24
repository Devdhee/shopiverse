import CartOverview from '@/components/CartOverview';
import CheckoutForm from '@/components/CheckoutForm';
import { auth } from '@/utils/auth';

async function page() {
  const session = await auth();

  return (
    <div className="mt-16 py-10 bg-background-light-gray ">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-8">
        <div>
          <CheckoutForm />
        </div>

        <div className="">
          <CartOverview />
        </div>
      </main>
    </div>
  );
}

export default page;
