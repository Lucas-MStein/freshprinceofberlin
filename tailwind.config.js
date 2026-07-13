/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lily: ['"Lily Script One"', 'cursive'],
        anton: ['Anton', 'Impact', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0a0a0a',
          off: '#f4f4f0',
          red: '#ff2a00',
          yellow: '#ffea00',
          blue: '#0055ff',
          grey: '#2a2a2a',
        },
      },
      boxShadow: {
        brutal: '8px 8px 0 0 #0a0a0a',
        'brutal-red': '12px 12px 0 0 #ff2a00',
      },
    },
  },
  safelist: [
    'order-1',
    'order-2',
    'sm:order-1',
    'sm:order-2',
    'md:order-1',
    'md:order-2',
  ],
  plugins: [],
};
