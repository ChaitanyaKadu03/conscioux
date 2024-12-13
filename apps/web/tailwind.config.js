/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        violet: {
          DEFAULT: '#7c3aed',
          50: '#f2ebfd',
          75: '#c9aef8',
          100: '#b38df5',
          200: '#925bf0',
          300: '#7c3aed',
          400: '#5729a6',
          500: '#4c2391'
        },
        yellow: {
          DEFAULT: '#f59e0b',
          50: '#fef5e7',
          75: '#fbd79b',
          100: '#f9c771', //
          200: '#f7ae34', //
          300: '#f59e0b',
          400: '#ac6f08',
          500: '#956007'
        },
        navy: {
          DEFAULT: '#0d1117',
          50: '#e7e7e8',
          75: '#9c9da0',
          100: '#737578',
          200: '#36393e',
          300: '#0d1117',
          400: '#090c10',
          500: '#080a0e'
        },
        green: {
          DEFAULT: '#10b981',
          50: '#e7f8f2',
          75: '#9de2cb',
          100: '#74d6b6',
          200: '#39c596',
          300: '#10b981',
          400: '#0b825a',
          500: '#0a714f'
        },
        red: {
          DEFAULT: '#ef4444',
          50: '#fdecec',
          75: '#f8b2b2',
          100: '#f69393',
          200: '#f26464',
          300: '#ef4444',
          400: '#a73030',
          500: '#922929'
        },
        neutral: {
          DEFAULT: '#575757',
          0: '#ffffff', // white, text-super-highlight
          10: '#fafafa', // white, text-high-highlight
          20: '#f5f5f5',
          30: '#ebebeb', // white, text-medium-highlight
          40: '#dedede',
          50: '#bfbfbf', // white, text-low-highlight
          60: '#b0b0b0',
          70: '#a3a3a3',
          80: '#949494',
          90: '#858585',
          100: '#757575',
          200: '#666666',
          300: '#575757',
          400: '#4a4a4a',
          500: '#3b3b3b',
          600: '#2e2e2e', // background
          700: '#1c1c1c',
          800: '#0d0d0d',
          900: '#000000'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Source Sans Pro', 'sans-serif']
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1640px'
    }
  },
  plugins: []
};
