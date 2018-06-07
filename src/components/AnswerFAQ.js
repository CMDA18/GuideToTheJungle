// https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html

// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'

type Props = {
  answer: string,
  state: 'default' | 'faq'
}

const AnswerFAQ = (props: Props) => {
  switch (props.state) {
    case 'default':
    default :
      return (
        <Container>
          <Answer dangerouslySetInnerHTML={{__html: `${props.answer}`}} />
        </Container>
      )

    case 'faq':
      return (
        <ContainerFAQ>
          <Answer dangerouslySetInnerHTML={{__html: `${props.answer}`}} />
        </ContainerFAQ>
      )
  }
}

export default AnswerFAQ

const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ContainerFAQ = styled.div`
  padding: 10px 30px;
  background-color: ${colorPalette.lightBlue};
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Answer = styled.h1`
  ${textStyles.general};
`
