/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-0': '#605BFF',
        'primary-1': '#7975FF',
        'primary-2': '#B9B7FD',
        'primary-3': '#B5B3FF',
        'secondary-0': '#FAD55E',
        'heading': '#292968',
        'body': '#3D3D66',
        'inactive': '#70708C',
        'gradient': '#EFFFAD',
        'gradient-2': '#FAD961',
        'gradient-3': '#F76B1C',


      },
    },
  },
  plugins: [],
}

