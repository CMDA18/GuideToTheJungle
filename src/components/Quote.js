// @flow
import React from 'react'
import styled from 'styled-components'
import Quotemark from '../shared/elements/QuoteMark'
import {
  // textStyles,
  colorPalette
} from '../styles/styleGuide'

type Props = {
  image: string,
  text: string,
  metadata: string
}

const Quote = (props: Props) =>
  <Container>
    <Image url={props.image}/>
    <TextContainer>
      <Quotemark />
      <QuoteText>{props.text}</QuoteText>
      <Line />
      <Metadata>{props.metadata}</Metadata>
    </TextContainer>
  </Container>

export default Quote

const Container = styled.div`
  padding: 15px;
  display: flex;
`

const Image = styled.div`
  width: 305px;
  height: 330px;
`

const TextContainer = styled.div`
  background-color: ${colorPalette.lightBlue};
  width: 722px;
`

const QuoteText = styled.p`
`

const Line = styled.span`
  display: block;
  border-bottom: 4px solid ${colorPalette.orange};
  width: 44px;
  height: 5px;
  margin: auto;
`

const Metadata = styled.p`
`
