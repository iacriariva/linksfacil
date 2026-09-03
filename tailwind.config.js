/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#820AD1',
        'primary-dark': '#4C0677',
        'primary-light': '#F3E7FA',
        ink: '#191919',
        canvas: '#F5F5F5',
        secondary: '#00A86B',
        danger: '#EF4444',
      },
      boxShadow: {
        card: '0 12px 35px rgba(35, 12, 47, 0.08)',
        'card-hover': '0 22px 48px rgba(76, 6, 119, 0.16)',
      },
    },
  },
  plugins: [],
};
