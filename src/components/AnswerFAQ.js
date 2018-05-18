// https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html

// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'

type Props = {
  answer: string
}

const AnswerFAQ = (props: Props) =>
  <Container>
    <Answer dangerouslySetInnerHTML={{__html: `${props.answer}`}} />
  </Container>

export default AnswerFAQ

const Container = styled.div`
  padding: 10px 30px;
  background-color: ${colorPalette.lightBlue};
  display: flex;
  justify-content: space-between;
  
`

const Answer = styled.h1`
  ${textStyles.general};
`
