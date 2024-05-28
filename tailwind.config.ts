import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy-blue': 'hsl(var(--primary-navy-blue))',
        'primary-bright-red': 'hsl(var(--primary-bright-red))',
        'secondary-soft-gray': 'hsl(var(--secondary-soft-gray))',
        'secondary-dark-gray': 'hsl(var(--secondary-dark-gray))',
        'secondary-warm-yellow': 'hsl(var(--secondary-warm-yellow))',
        'accent-turquoise': 'hsl(var(--accent-turquoise))',
        'accent-coral': 'hsl(var(--accent-coral))',
        'background-white': 'hsl(var(--background-white))',
        'background-light-gray': 'hsl(var(--background-light-gray))',
        'text-dark-gray': 'hsl(var(--text-dark-gray))',
        'text-medium-gray': 'hsl(var(--text-medium-gray))',
        'text-light-gray': 'hsl(var(--text-light-gray))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
