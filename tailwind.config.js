/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop-dark': "url('../public/images/bg-desktop-dark.jpg')",
      }
    },
    colors: {
      BrightBlue: 'hsl(220, 98%, 61%)',
      VeryLightGray: 'hsl(0, 0%, 98%)',
      VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
      LightGrayishBlue: 'hsl(233, 11%, 84%)',
      GrayishBlue: 'hsl(236, 9%, 61%)',
      VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
      DarkBlue: 'hsl(235, 21%, 11%)',
      DarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
      DarkGrayishBlue: ' hsl(234, 39%, 85%)',
      HoverGrayishBlue: 'hsl(236, 33%, 92%)',
      DarkGrayishBlue1: 'hsl(234, 11%, 52%)',
      VeryDarkGrayishBlue1: 'hsl(233, 14%, 35%)',
      VeryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
    },
    fontFamily: {
      'body': ['Josefin Sans', 'sans-serif'],
    }
  },
  plugins: [],
}
