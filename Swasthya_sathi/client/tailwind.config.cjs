/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-gray-50',
    'bg-white',
    'text-gray-600',
    'text-gray-800',
    'text-blue-600',
  ]
}