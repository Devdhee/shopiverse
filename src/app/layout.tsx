import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MobileNavBar from '@/components/MobileNavBar';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import { Toaster } from 'sonner';

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
      <Providers>
        <body className={`${inter.className} !scroll-smooth`}>
          <Toaster position="bottom-center" richColors />
          <MobileNavBar />
          <NavBar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
