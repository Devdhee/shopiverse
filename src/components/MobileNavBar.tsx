'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

const navList = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
];

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed bg-primary-navy-blue w-screen py-4 top-0 h-16">
      <header className="flex justify-end transition-all px-2">
        {!isOpen && (
          <Menu
            style={{ color: 'hsl(var(--background-light-gray))' }}
            size={30}
            onClick={handleHamburgerMenu}
          />
        )}
      </header>

      <nav
        className={clsx(
          'text-sm absolute transition-all duration-300 flex flex-col h-screen  w-screen px-2 items-end top-0',
          {
            'right-[-100%] ': !isOpen,
            'right-0': isOpen,
          }
        )}
      >
        <header className="bg-primary-navy-blue h-16 py-4 flex justify-between w-full px-2 items-center">
          <X
            style={{ color: 'hsl(var(--background-light-gray))' }}
            size={32}
            onClick={handleHamburgerMenu}
          />
          <span className="text-white text-xl flex-1 text-center">LOGO</span>
        </header>
        <ul className="divide-y divide-primary-navy-blue space-y-5 w-full px-2">
          {navList.map((navListItem) => (
            <Link href={navListItem.href} key={navListItem.title}>
              <li className=" space-y-5">{navListItem.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavBar;
