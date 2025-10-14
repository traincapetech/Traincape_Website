/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        beam: {
          '0%': {
            transform: 'scaleX(0) scaleY(0)',  // start with no border
            transformOrigin: 'bottom right',
          },
          '50%': {
            transform: 'scaleX(1) scaleY(1)',  // animate border to full size
            transformOrigin: 'top left',
          },
          '100%': {
            transform: 'scaleX(0) scaleY(0)',  // reset border size back to zero
            transformOrigin: 'bottom right',
          },
        },
      },
      animation: {
        beam: 'beam 2s ease-in-out infinite',  // apply animation
      },
    },
  },
  plugins: [],
}

