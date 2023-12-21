import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'content': '1280px',
      },
      colors: {
        'the-black1': '#1E1E2D',
        'navig1': '#CFCFCF',
        'second-gray': '#727272',
        'the-black2': '#262626',
        'third-gray': '#858585',
        'the-blue1': '#0075FF',
        'grdb': '#FF2DF7',
        'grdm': '#5200FF',
        'grde': '#00F0FF',
      },
    },
  },
  plugins: [],
  content: [],
}

export default <Partial<Config>>config
