// @flow
import React from 'react'
import styled from 'styled-components'
import { fonts, fontsWeights, colorPalette } from '../../styles/styleGuide'

type Props = {
  unlockText?: string
}

const LabelBestPractice = (props: Props) => (
  <Label>
    <Text>{props.unlockText}</Text>
  </Label>
)

const Label = styled.div`
  display: inline-block;
`
const Text = styled.div`
  display: inline-block;
  text-transform: uppercase;
  background-color: ${colorPalette.orange};
  position: relative;
  padding: 0 30px;
  color: #FFF;
  font-family: ${fonts.title};
  line-height: 28px;
  font-size: 16px;
  font-weight: ${fontsWeights.bold};
`

export default LabelBestPractice
