const plugin = require('tailwindcss/plugin')

/** Default values for sizing and spacing */
const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem', /* 1280px */
    '8xl': '85.375rem', /* 1366px */
    '9xl': '120rem' /* 1920px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem', /* 72px */
    '9/20': '45%',
    '11/20': '55%',
    '3%': '3%',
    '5%': '5%',
    '11%': '11%'
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        /* Primary Font - CONNEQT */
        primary: ['Primary', 'sans serif'],
        /* Secondary Font - Tomato Grotesk */
        'secondary-light': ['Secondary light', 'sans serif'],
        'secondary-regular': ['Secondary regular', 'sans serif'],
        'secondary-medium': ['Secondary medium', 'sans serif']
      },
      colors: {
        primary: '#0065a2', // Medium Persian Blue
        secondary: '#353535' // Jet
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      maxWidth: {
        screen: '100vw', // Prevents the element from growing larger than the viewport width
        ...sizingConfig.breakpoints
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        ...sizingConfig.defaults
      },
      margin: {
        ...sizingConfig.defaults
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      },
      fontSize: {
        md: ['0.938rem', { lineHeight: '1.375rem' }], // 15px
        '4.5xl': ['2.5rem', { lineHeight: '2.5rem' }] // 40px
      },
      backgroundImage: {
        mission: 'url(/images/pictures/mission.jpg)',
        vision: 'url(/images/pictures/vision.jpg)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    plugin(({ addVariant, e }) => {
      addVariant('second', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`second${separator}${className}`)}:nth-child(2)`
        })
      })
    })
  ]
}
