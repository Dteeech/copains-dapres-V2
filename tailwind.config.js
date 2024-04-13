/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        primary: {
          500: '#00beaa',
          
        },
        secondary: {
          500: '#ff524d'
        },
        primary_bg: '#f9f9f9',
        secondary_bg: 'rgba(255, 173, 157, .5)',
        squareMeter: '#EDE2E2'
      }
    }
  },
  darkMode: 'class',
  plugins: [

  ]
}
