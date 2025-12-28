/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // এটি খুবই গুরুত্বপূর্ণ
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};