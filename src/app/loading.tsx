import Loader from '@/components/Loader';

function loading() {
  return (
    <div className="mt-16 py-5 h-[50vh] flex items-center justify-center">
      <Loader />
    </div>
  );
}

export default loading;
