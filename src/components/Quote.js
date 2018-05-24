// @flow
import React from 'react'
import styled from 'styled-components'
import Quotemark from '../shared/elements/QuoteMark'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'

export type QuoteProps = {
  image: string,
  text: string,
  metadata: string
}

const Quote = (props: QuoteProps) =>
  <Container>
    <Image backgroundImage={props.image ? props.image : props.image}/>
    <TextContainer>
      <Wrapper>
        <Quotemark />
      </Wrapper>
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
background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ''});
  width: 305px;
  height: 330px;
  background-size: cover;
  background-position: center;
`

const Wrapper = styled.div`
  margin-top: -20px;
`

const TextContainer = styled.div`
  background-color: ${colorPalette.lightBlue};
  width: 722px;
  max-height: 330px;
`

const QuoteText = styled.p`
  margin: 30px 50px;
  ${textStyles.quote};
`

const Line = styled.span`
  display: block;
  border-bottom: 4px solid ${colorPalette.orange};
  width: 44px;
  height: 5px;
  margin: auto;
`

const Metadata = styled.p`
  margin: 30px 50px
`
