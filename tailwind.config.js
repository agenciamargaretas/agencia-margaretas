const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#021373',
        secondary: '#03258C',
        accent: '#F27405',
        background: '#010B40',
        foreground: '#F2F2F2'
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        display: ['var(--font-khand)'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
} 