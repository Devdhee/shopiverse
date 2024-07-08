import SignInButton from '@/components/SignInButton';

function page() {
  return (
    <main className="py-20 px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center h-[50vh]">
      <div className="container mx-auto">
        <h2 className="text-center font-semibold sm:text-lg ">
          Please login to continue
        </h2>
        <div className="w-full flex justify-center mt-4">
          <SignInButton />
        </div>
      </div>
    </main>
  );
}

export default page;
