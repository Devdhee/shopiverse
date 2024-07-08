'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import Logo from './Logo';
import ShoppingCartIcon from './ShoppingCart';
import { useSession } from 'next-auth/react';
import SignOutButton from './SignOutButton';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const navList = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    title: 'Support',
    href: '#',
  },
];

function MobileNavBar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 250 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  function handleHamburgerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.div
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="sticky top-0 z-30 w-full bg-primary-navy-blue py-4 h-16 flex justify-between md:px-8 lg:hidden items-center"
    >
      <span className="px-2 text-left">
        <Logo />
      </span>
      <header className="flex justify-end transition-all px-2 gap-4 items-center">
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
        {session?.user?.image && (
          <img
            className="h-6 w-6 rounded-full border border-stone-600"
            src={session.user.image}
            alt={`Avatar image for ${session.user.name}`}
            referrerPolicy="no-referrer"
          />
        )}
        <Menu
          aria-label="Open menu"
          style={{ color: 'hsl(var(--background-light-gray))' }}
          size={30}
          onClick={handleHamburgerMenu}
        />
      </header>

      <nav
        className={clsx(
          'text-sm absolute transition-all duration-500 flex flex-col h-screen w-full md:w-[70vw] z-30 items-end  bg-background-white',
          {
            'top-[-100%] opacity-0': !isOpen,
            'top-0 opacity-100': isOpen,
          }
        )}
      >
        <header className="bg-primary-navy-blue px-4 h-16 py-4 flex justify-between w-full items-center md:px-8">
          <X
            aria-label="Close menu"
            style={{ color: 'hsl(var(--background-light-gray))' }}
            size={32}
            onClick={handleHamburgerMenu}
          />
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
        </header>
        <ul className="divide-y divide-text-medium-gray flex flex-col gap-1 w-full py-5 px-4 h-full md:px-8">
          {navList.map((navListItem) => (
            <Link
              href={navListItem.href}
              key={navListItem.title}
              onClick={handleHamburgerMenu}
              passHref
            >
              <li className="space-y-5 text-primary-navy-blue text-lg py-4">
                {navListItem.title}
              </li>
            </Link>
          ))}
          {session?.user && (
            <div className="pt-12" onClick={handleHamburgerMenu}>
              <SignOutButton />
            </div>
          )}
        </ul>
      </nav>
    </motion.div>
  );
}

export default MobileNavBar;
