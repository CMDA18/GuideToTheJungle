// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles
} from '../styles/styleGuide'

type Props = {
  introTitle: string,
  introText: string
}

const Intro = (props: Props) =>
  <Container>
    <Title>{props.introTitle}</Title>
    <IntroText>{props.introText}</IntroText>
  </Container>

export default Intro

const Container = styled.div`
  max-width: 964px;
  margin: auto;
`

const Title = styled.h2`
  ${textStyles.subTitle};
`

const IntroText = styled.p`
  ${textStyles.introText};
  margin-bottom: 50px;
`
