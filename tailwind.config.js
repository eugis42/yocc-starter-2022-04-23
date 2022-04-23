module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0000ff',
      },
    },
    fontFamily: {
      'greed': ['Greed'],
      'karma': ['Karma'],
    },
    aspectRatio: {
      '3/4': '3 / 4',
      '16/9': '16 / 9',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
