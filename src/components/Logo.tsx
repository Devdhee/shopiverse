import { Concert_One } from 'next/font/google';
import Image from 'next/image';

const concertOne = Concert_One({ subsets: ['latin'], weight: ['400'] });

function Logo() {
  return (
    <div
      className={`${concertOne.className} px-2 text-pretty text-2xl text-secondary-warm-yellow flex items-end tracking-wider md:text-3xl lg:text-4xl`}
    >
      ShopiVerse
      <span className="hidden lg:block">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </span>
      <span className="hidden md:block lg:hidden ">
        <Image src="/logo.png" alt="logo" width={35} height={35} />
      </span>
      <span className="md:hidden ">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </span>
    </div>
  );
}

export default Logo;
