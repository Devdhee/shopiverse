'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Button from './Button';

function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchparams.get('category') ?? 'all';

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchparams);
    params.set('category', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-x-1 flex-wrap gap-y-2">
      {['all', 'women', 'men', 'jewelery', 'electronics'].map((filter) => (
        <Button
          key={filter}
          variant="secondarySm"
          onClick={() => handleFilter(filter)}
          isActive={activeFilter === filter}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
