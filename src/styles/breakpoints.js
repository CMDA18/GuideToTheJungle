import { css } from 'styled-components'

export const breakpointSizes = {
  xxl: 2560,
  xl: 1440,
  sxl: 1180,
  lg: 1024,
  smd: 768,
  md: 689,
  sm: 320
}

export const toBreakpoint = Object.keys(breakpointSizes).reduce(
  (accumulator, label) => {
    const emSize = breakpointSizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export const fromBreakpoint = Object.keys(breakpointSizes).reduce(
  (accumulator, label) => {
    const emSize = (breakpointSizes[label] + 1) / 16
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
