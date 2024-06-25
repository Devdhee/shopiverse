import { auth } from '@/utils/auth';

export const middleware = auth;

export const config = {
  matcher: ['/cart'],
};
