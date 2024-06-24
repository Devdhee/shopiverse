'use server';

import { signIn, signOut } from './auth';

export async function signInAction() {
  await signIn('google', {
    redirectTo: '/checkout',
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}