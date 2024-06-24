import { UserRound } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import ShoppingCartIcon from './ShoppingCart';
import { auth } from '@/utils/auth';
import SignOutButton from './SignOutButton';

const navList = [
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'Support',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
];

async function NavBar() {
  const session = await auth();

  return (
    <nav className="bg-primary-navy-blue hidden lg:block">
      <div className="mx-auto container px-8 py-4 flex justify-between items-center">
        <Logo />
        <ul className="flex gap-10">
          {navList.map((item) => (
            <Link href={item.href} key={item.title}>
              <li className="text-background-light-gray text-lg hover:text-secondary-warm-yellow">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-8 justify-center items-center">
          <Link href="/cart">
            <ShoppingCartIcon />
          </Link>
          {session?.user?.image ? (
            <img
              className="size-8 rounded-full border border-stone-600"
              src={session.user.image}
              alt={`Avatar image for ${session.user.name}`}
              referrerPolicy="no-referrer"
            />
          ) : (
            <UserRound
              style={{ color: 'hsl(var(--background-light-gray))' }}
              size={28}
            />
          )}

          {session?.user && <SignOutButton />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
