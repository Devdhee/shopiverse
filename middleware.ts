// import { auth } from '@/utils/auth';

import { NextRequest } from 'next/server';

// export const middleware = auth;

// export const config = {
//   matcher: ['/checkout'],
// };

export function middleware(request: NextRequest) {
  console.log(request);
}
