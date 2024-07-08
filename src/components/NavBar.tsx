'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';
import ShoppingCartIcon from './ShoppingCart';
import SignOutButton from './SignOutButton';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

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

function NavBar() {
  const { data: session } = useSession();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="bg-primary-navy-blue hidden lg:block sticky top-0 w-full z-50"
    >
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
          {session?.user?.image && (
            <img
              className="size-8 rounded-full border border-stone-600"
              src={session.user.image}
              alt={`Avatar image for ${session.user.name}`}
              referrerPolicy="no-referrer"
            />
          )}

          {session?.user && <SignOutButton />}
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
