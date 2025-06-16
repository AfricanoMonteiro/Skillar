/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          10: '#FFEBEE',
          20: '#FFCDD2',
          30: '#EF9A9A',
          40: '#E57373',
          50: '#EF5350',
          60: '#F44336',
          70: '#E53935',
          80: '#D32F2F',
          90: '#C62828',
          100: '#B71C1C',
        },
        secondary: {
          DEFAULT: '#E50914',
          10: '#FFEBEE',
          20: '#FFCDD2',
          30: '#EF9A9A',
          40: '#E57373',
          50: '#EF5350',
          60: '#F44336',
          70: '#E53935',
          80: '#D32F2F',
          90: '#C62828',
          100: '#B71C1C',
        },
        'muted-foreground': '#6B7280',
      },
    },
  },
  plugins: [],
}
