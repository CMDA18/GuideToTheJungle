// @flow

import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { textStyles, colorPalette, shadows } from '../../styles/styleGuide'

type Props = {
  type?: 'button' | 'submit' | 'externalLink' | 'internalLink',
  link?: string,
  route?: string,
  label?: string,
  clickHandler?: () => void
}

const ButtonPrimary = (props: Props) => {
  switch (props.type) {
    case 'button':
    case 'submit':
      return (
        <Button
          onClick={props.clickHandler}
          type={props.type}
        >{props.label}</Button>
      )

    case 'externalLink':
      return (
        <ExternalLink
          href={props.link}
        >{props.label}
        </ExternalLink>
      )

    case 'internalLink':
    default:
      return (
        <InternalLink
          to={props.route || props.link}
        >
          {props.label}
        </InternalLink>
      )
  }
}

export default ButtonPrimary

const buttonStyling = css`
  text-align: center;
  text-decoration: none;
  min-width: 190px;
  padding: 10px 33px 10px 33px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  ${shadows.boxPrimary};
  border-radius: 2px;
  border: 1px solid ${colorPalette.darkBlue};
  background-color: ${colorPalette.darkBlue};
  color: ${colorPalette.white} !important;
  ${textStyles.primaryButton}
  color: ${colorPalette.white};
  transition: all 400ms ease-in-out;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${colorPalette.orange};
    background-color: ${colorPalette.orange};
  }
  &.disabled {
    box-shadow: 0;
    background-color: #8B8D8F;
  }
`

const ExternalLink = styled.a`
  ${buttonStyling}
`
const InternalLink = styled(Link)`
  ${buttonStyling}
`
const Button = styled.button`
  ${buttonStyling}
`
