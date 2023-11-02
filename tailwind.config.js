/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
        '132px': '132px',
      },
      colors: {
        'spot-hover': '#18d760',
        'main-purple': '#2d46b9',
        'main-green': '#1ed760',
      },
      backgroundImage: (theme) => ({
        'spotify-theme': `url('/images/bursts.svg')`,
        'spotify-theme-mobile': `url('/images/bursts-mobile.svg')`,
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },
  plugins: [],
}

