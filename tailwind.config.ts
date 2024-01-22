import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'content': '1280px',
      },
      fontSize: {
        'xxs': '10px',
      },
      colors: {
        'black-1': '#1E1E2D',
        'black-2': '#262626',
        'navig1': '#CFCFCF',
        'gray-2': '#727272',
        'gray-3': '#858585',
        'gray-4': '#C4C4C4',
        'gray-5': '#CECECE',
        'gray-6': '#D7D7D7',
        'gray-7': '#E2E2E2',
        'blue-1': '#0075FF',
        'grdb': '#FF2DF7',
        'grdm': '#5200FF',
        'grde': '#00F0FF',
        'gradFrom': '#439DFF',
        'gradTo': '#6052FF',
      },
    },
  },
  plugins: [],
  content: [],
}

export default <Partial<Config>>config
