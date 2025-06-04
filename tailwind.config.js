/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema personalizado Universidad
        primary: {
          50: '#f0fdf4',   // verde muy claro
          100: '#dcfce7',  // verde claro
          200: '#bbf7d0',  // verde suave
          300: '#86efac',  // verde medio claro
          400: '#4ade80',  // verde medio
          500: '#22c55e',  // verde principal (modo claro)
          600: '#16a34a',  // verde oscuro
          700: '#15803d',  // verde más oscuro
          800: '#166534',  // verde muy oscuro
          900: '#14532d',  // verde casi negro
        },
        secondary: {
          50: '#fff7ed',   // naranja muy claro
          100: '#ffedd5',  // naranja claro
          200: '#fed7aa',  // naranja suave
          300: '#fdba74',  // naranja medio claro
          400: '#fb923c',  // naranja medio
          500: '#f97316',  // naranja principal
          600: '#ea580c',  // naranja oscuro
          700: '#c2410c',  // naranja más oscuro
          800: '#9a3412',  // naranja muy oscuro
          900: '#7c2d12',  // naranja casi negro
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-light': 'linear-gradient(135deg, #22c55e 0%, #f97316 100%)',
        'hero-dark': 'linear-gradient(135deg, #16a34a 0%, #ea580c 100%)',
      }
    },
  },
  plugins: [],
}