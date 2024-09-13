export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeup05: 'fadeup 0.5s ease-in-out ',
        fadeup1: 'fadeup 1s ease-in-out ',
        fadeup15: 'fadeup 1.5s ease-in-out ',
      },
      keyframes: {
        fadeup: {
          '0%': { transform: 'translateY(50px)', opacity: 0},
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
        
      }
    },
  },
  plugins: [],
}