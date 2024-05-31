'use client';

import { useState } from 'react';
import { Menu, ShoppingCart, UserRound, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import Logo from './Logo';

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
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed bg-primary-navy-blue w-screen py-4 top-0 h-16 flex justify-between md:px-8 lg:hidden items-center z-30">
      <span className="px-4">
        <Logo />
      </span>
      <header className="flex justify-end transition-all px-4 gap-4 items-center">
        <ShoppingCart
          style={{ color: 'hsl(var(--background-light-gray))' }}
          size={18}
        />
        <UserRound
          style={{ color: 'hsl(var(--background-light-gray))' }}
          size={18}
        />

        <Menu
          style={{ color: 'hsl(var(--background-light-gray))' }}
          size={30}
          onClick={handleHamburgerMenu}
        />
      </header>

      <nav
        className={clsx(
          'text-sm absolute transition-all duration-500 flex flex-col h-screen w-screen z-30 items-end top-0',
          {
            'right-[-100%] opacity-0': !isOpen,
            'right-0 opacity-100': isOpen,
          }
        )}
      >
        <header className="bg-primary-navy-blue px-4 h-16 py-4 flex justify-between w-full items-center md:px-8">
          <X
            style={{ color: 'hsl(var(--background-light-gray))' }}
            size={32}
            onClick={handleHamburgerMenu}
          />
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
        </header>
        <ul className="divide-y bg-background-white divide-text-medium-gray flex flex-col gap-1 w-full py-5 px-4 h-screen md:px-8">
          {navList.map((navListItem) => (
            <Link href={navListItem.href} key={navListItem.title}>
              <li className=" space-y-5 text-primary-navy-blue text-lg py-4">
                {navListItem.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavBar;
