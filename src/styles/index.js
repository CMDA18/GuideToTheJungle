// Global stylesheet
// @flow

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { globalFonts } from './fonts'
import { colorPalette, textStyles } from './styleGuide'

injectGlobal`
  ${styledNormalize}
  ${globalFonts}

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    color: inherit;
    line-height: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased; /* generic font smoothing */
    background-color: ${colorPalette.white};
    color: ${colorPalette.darkBlue};

    ${textStyles.general};
  }
`
