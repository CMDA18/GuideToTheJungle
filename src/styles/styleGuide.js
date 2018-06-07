import { css } from 'styled-components'

// Colors
export const colorPalette = {
  white: '#FFFFFF',
  lightBlue: '#EBF2F5',
  darkBlue: '#03344a',
  blue: '#275e92',
  orange: '#ffa50d',
  grey: '#8F8F8F',
  lightGrey: '#DCD7D7',
  black: '#000000'
}

// Fonts
export const fonts = {
  default: 'Merriweather, serif',
  title: 'Gotham Rounded SSm A, Gotham Rounded SSm B'
}

// Font Weights
export const fontsWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  bolder: 900
}

// Shadows
export const shadows = {
  boxPrimary: 'box-shadow: 0 0 10px 0 rgba(139, 141, 143, 0.32)',
  boxSecondary: 'box-shadow: 0 -2px 10px 0 rgba(213, 216, 219, 0.32)'
}

export const textStyles = {
  // p
  general: css`
    font-family: ${fonts.default};
    font-weight: ${fontsWeights.light};
    color: ${colorPalette.darkBlue};
    font-size: 16px;
    line-height: 36px;
  `,
  navigationItems: css`
    font-family: ${fonts.title};
    font-weight: ${fontsWeights.bold};
    font-size: 16px;
    line-height: 20px;
  `,
  // h1
  pageTitle: css` 
    font-family: ${fonts.title};
    font-weight: ${fontsWeights.bold};
    color: ${colorPalette.orange};
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    margin: 0 0 45px;
  `,
  // h2
  subTitle: css`
    font-family: ${fonts.default};
    font-weight: ${fontsWeights.bold};
    font-size: 40px;
    line-height: 56px;
    text-align: center;
  `,
  // h3
  title: css`
  font-family: ${fonts.default};
  font-weight: ${fontsWeights.bold};
  font-size: 20px;
  line-height: 32px;
`,
  // p
  introText: css`
    font-family: ${fonts.default};
    font-weight: ${fontsWeights.normal};
    font-size: 20px;
    line-height: 32px;
    text-align: center;
  `,
  // quote
  quote: css`
    font-size: 16px;
    line-height: 30px;
  `
}
