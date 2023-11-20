import {DefaultTheme} from 'styled-components'

const general = {
  black: {
    100: '#070707',
    50: 'rgba(7,7,7,0.5)',
    40: 'rgba(7,7,7,0.4)',
    30: 'rgba(7,7,7,0.3)',
    20: 'rgba(7,7,7,0.2)',
    10: 'rgba(7,7,7,0.1)',
  },
  yellow: '#F4CE14',
  white: '#F5F7F8',
  grey: '#E5E5E5',
}

const fonts = {
  heading: 'Roboto, sans-serif',
  body: 'Roboto, sans-serif',
}

const text = {
  primary: general.white,
  secondary: general.yellow,
}

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
  display: {
    default: 500,
    alternative: 400,
  },
  heading: {
    default: 500,
    alternative: 400,
  },
  text: {
    default: 400,
    alternative: 500,
  },
}

type lineHeightsBySize = {[key: string | number]: number | string}
const lineHeights: {
  display: lineHeightsBySize
  text: lineHeightsBySize
  heading: lineHeightsBySize
} = {
  display: {
    1: 1.25,
  },
  heading: {
    1: '32px',
    2: '32px',
    3: '28px',
    4: '24px',
    5: '20px',
    6: '16px',
  },
  text: {
    large: '26px',
    base: '24px',
    small: '20px',
    xSmall: '16px',
    xxSmall: '14px',
  },
}

const fontSizes = {
  display: {
    1: '32px',
  },
  heading: {
    1: '28px',
    2: '24px',
    3: '21px',
    4: '16px',
    5: '14px',
    6: '12px',
  },
  text: {
    large: '18px',
    base: '16px',
    small: '14px',
    xSmall: '12px',
    xxSmall: '10px',
  },
}

const colors = {
  general,
  text,
}

export const theme: DefaultTheme = {
  colors,
  fontWeights,
  text,
  fonts,
  fontSizes,
  lineHeights,
} as const
