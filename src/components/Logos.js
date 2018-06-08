// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles
} from '../styles/styleGuide'

type Props = {
  image: string,
  metaText: string
}

const Logos = (props: Props) =>
  <Container>
    <Image src={props.image}/>
    <MetaTekst>{props.metaText}</MetaTekst>
  </Container>

export default Logos

const Container = styled.div`
  display: inline-block;
`

const Image = styled.img`
  width: 250px;
  margin-right: 10px;
`

const MetaTekst = styled.p`
  margin: 0;
  text-align: center;
  ${textStyles.general};
`
