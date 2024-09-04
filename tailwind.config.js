module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 360px) { ... }

      'md': '360px',
      // => @media (min-width: 400px) { ... }

      'mdx': '460px',
      // => @media (min-width: 650px) { ... }

      'mdl': '550px',
      // => @media (min-width: 750px) { ... }

      'slg': '750px',
      // => @media (min-width: 900px) { ...

      'lg': '900px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1000px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1100px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '4xl': '1600px',
      '5xl': '2000px',
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
     
      colors: {
        white100: '#FFFFFF',
        violet100: '#7B72EB',
        titleDark: '#010101',
        titleDark50: '#7B7B7B',
        titleDark40: '#A6A6A6',
        bgDark: '#F8F8F8',
        bgCardDark: '#F4F3FF',
        footerBgDark: '#1C1C1C'
      },
    },
  },
  plugins: [
  

  ],
};
