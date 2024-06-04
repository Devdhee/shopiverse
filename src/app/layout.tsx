import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopiverse',
  description: 'Shop Now and Save Big on Your Favorite Products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <MobileNavBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
