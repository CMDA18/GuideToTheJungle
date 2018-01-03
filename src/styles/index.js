// Global stylesheet
// @flow

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}

  html {
    font-family: 'Comic Sans MS', sans-serif;
  }
`
