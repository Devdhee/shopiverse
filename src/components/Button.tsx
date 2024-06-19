import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  variant: 'primary' | 'secondary' | 'sm' | 'secondarySm' | 'icon';
  isActive?: boolean;
  onClick?: () => void;
};

function Button({
  children,
  disabled,
  href,
  variant,
  onClick,
  isActive,
}: ButtonProps) {
  const base =
    'inline-block rounded-lg bg-secondary-warm-yellow font-bold tracking-wide text-background-white transition-colors duration-300 hover:bg-secondary-warm-yellow/90  focus:outline-none  disabled:cursor-not-allowed border border-secondary-warm-yellow';

  const styles = {
    primary: base + ' px-3.5 py-2.5 md:px-6 md:py-3.5 ',
    sm: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    icon: 'inline-block bg-secondary-warm-yellow font-bold tracking-wide text-background-white transition-colors duration-300 hover:bg-secondary-warm-yellow/90  focus:outline-none disabled:cursor-not-allowed border border-secondary-warm-yellow px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-lg',
    secondary:
      'inline-block rounded-lg border border-secondary-warm-yellow font-bold tracking-wide text-secondary-warm-yellow transition-colors duration-300 hover:bg-secondary-warm-yellow hover:text-background-white focus:outline-none disabled:cursor-not-allowed px-3.5 py-2.5 md:px-5 md:py-3',
    secondarySm:
      'inline-block rounded-lg border border-secondary-warm-yellow font-bold tracking-wide text-secondary-warm-yellow transition-colors duration-300 hover:bg-secondary-warm-yellow hover:text-background-white focus:outline-none disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  // Add active styles
  const activeStyle = 'bg-secondary-warm-yellow text-white';
  const inactiveStyle =
    'hover:bg-secondary-warm-yellow hover:text-background-white';

  const classNames = isActive
    ? styles[variant] + ' ' + activeStyle
    : styles[variant] + ' ' + inactiveStyle;

  if (href)
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={classNames}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
