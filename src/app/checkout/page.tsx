import CartOverview from '@/components/CartOverview';
import CheckoutForm from '@/components/CheckoutForm';
import { auth } from '@/utils/auth';

async function page() {
  const session = await auth();

  return (
    <div className="mt-16 py-10 bg-background-light-gray lg:mt-0 md:py-16">
      <main className="container mx-auto px-4 md:px-6 lg:px-10 flex flex-col gap-8 md:gap-14 lg:gap-5 lg:flex-row lg:justify-center xl:gap-12 ">
        <div className="lg:flex-1 xl:max-w-[650px]">
          <CheckoutForm />
        </div>

        <div className="lg:max-w-[450px] xl:max-w-[500px] ">
          <CartOverview />
        </div>
      </main>
    </div>
  );
}

export default page;
