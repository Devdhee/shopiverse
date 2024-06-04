import Link from 'next/link';
import Logo from './Logo';

const about = [
  {
    title: 'About Us',
  },
  {
    title: 'Our Outlets',
  },
  {
    title: 'Meet the Team',
  },
];

const terms = [
  {
    title: 'Terms & Conditions',
  },
  {
    title: 'Shipping & Delivery',
  },
  {
    title: 'Warranty',
  },
  {
    title: 'Refund & Return Policy',
  },
  {
    title: 'Privacy Policy',
  },
];

const shop = [
  {
    title: 'My Account',
    href: '#',
  },
  {
    title: 'Track Order',
    href: '#',
  },
  {
    title: 'Cart',
    href: '#',
  },
  {
    title: 'Checkout',
    href: '#',
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-primary-navy-blue px-4 py-5 sm:py-12 md:py-16 lg:py-28 xl:px-24">
      <footer className="container space-y-3 mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-16 sm:gap-y-16">
          <div className="text-background-white text-sm ">
            <h4 className=" text-sm font-semibold mb-4">Customer Service</h4>
            <div className="mb-3">
              <h5 className="text-sm text-secondary-soft-gray/90 mb-1">
                Phone:
              </h5>
              <p>+2345 678 901 2345</p>
              <p>+2345 678 901 2345</p>
            </div>
            <div className="">
              <h5 className="text-sm text-secondary-soft-gray/90 mb-1">
                email:
              </h5>
              <p>support@shopiverse.com</p>
            </div>
          </div>

          <div className="text-background-white text-sm">
            <h4 className=" text-sm font-semibold mb-4">Shop</h4>
            <ul className="">
              {shop.map((listItem) => (
                <Link href={listItem.href} key={listItem.title}>
                  <li className="text-secondary-soft-gray/90 hover:text-secondary-soft-gray mb-1">
                    {listItem.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="text-background-white text-sm">
            <h4 className=" text-sm font-semibold mb-4">About</h4>
            <ul className="">
              {about.map((listItem) => (
                <li
                  key={listItem.title}
                  className="text-secondary-soft-gray/90 hover:text-secondary-soft-gray mb-1"
                >
                  {listItem.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-background-white text-sm">
            <h4 className=" text-sm font-semibold mb-4">Terms</h4>
            <ul className="">
              {terms.map((listItem) => (
                <li
                  key={listItem.title}
                  className="text-secondary-soft-gray/90 hover:text-secondary-soft-gray mb-1"
                >
                  {listItem.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-primary-navy-blue/90 border-t-2 border-secondary-warm-yellow pt-2">
          <span className="flex justify-center">
            <Logo />
          </span>
          <p className="text-sm text-text-light-gray text-center">
            &copy; {year}
            <span className="text-secondary-warm-yellow font-semibold">
              {' '}
              Shopiverse{' '}
            </span>
            &mdash; All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
