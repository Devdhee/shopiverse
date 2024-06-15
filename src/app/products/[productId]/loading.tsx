import Loader from '@/components/Loader';

function loading() {
  return (
    <div className="mt-16 py-5 h-1/2 flex items-center justify-center">
      <Loader />
    </div>
  );
}

export default loading;
