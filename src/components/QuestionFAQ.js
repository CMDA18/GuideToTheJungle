// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'
import PlusSign from '../shared/elements/PlusSign'
import MinusSign from '../shared/elements/MinusSign'

type Props = {
  question: string,
  state: 'default' | 'close' | 'open'
}

const QuestionFAQ = (props: Props) => {
  switch (props.state) {
    case 'default':
    default :
      return (
        <Container>
          <Question>{props.question}</Question>
        </Container>
      )

    case 'close':
      return (
        <Container>
          <Question>{props.question}</Question>
          <PlusSign></PlusSign>
        </Container>
      )

    case 'open':
      return (
        <Container>
          <Question>{props.question}</Question>
          <MinusSign></MinusSign>
        </Container>
      )
  }
}

export default QuestionFAQ

const Container = styled.div`
  padding: 20px 0;
  border-bottom: 3px solid ${colorPalette.lightBlue};
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`

const Question = styled.h1`
  ${textStyles.general};
`
