// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles
} from '../styles/styleGuide'

type Props = {
  pageTitle: string
}

const PageTitle = (props: Props) =>
  <Container>
    <Title>{props.pageTitle}</Title>
  </Container>

export default PageTitle

const Container = styled.div`
`

const Title = styled.h1`
  ${textStyles.pageTitle};
`
