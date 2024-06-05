'use client';

import store from '@/store/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
