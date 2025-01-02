/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1400px'
    },
    colors: {
      'text-default': '#fff',
      'text-primary': '#FACE8D',
      'bg-default': '#050505',
      'bg-primary': '#F8D49E',
      'white-muted': 'rgba(255, 255, 255, 0.6)',
      
      
    },
    
    extend: {
      backgroundImage: {
        'header-image': "url(/src/assets/header/header-bg.jpg)"
      },
      fontFamily: {
          'bitter': ["Bitter Rose"],
          'chillax': ["Chillax"],
          'grotesk': ["Cabinet Grotesk"]
      }
    },
  },
  plugins: [],
}

