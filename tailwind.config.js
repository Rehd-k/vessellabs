
/** @type {import('tailwindcss').Config} */


tailwind.config  = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Inter"', 'sans-serif'], // Removed Serif for modern SaaS look
      },
      colors: {
        nexus: {
          primary: '#3B82F6', // Blue 500
          dark: '#0F172A',    // Slate 900
          light: '#F8FAFC',   // Slate 50
          accent: '#06B6D4',  // Cyan 500
        }
      }
    }
  }
}