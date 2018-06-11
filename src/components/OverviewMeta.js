// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'

type Props = {
  pageTitle: string,
  week?: string
}

const OverviewMeta = (props: Props) =>
  <Container>
    <MetaText>Welkom Luisa Braga</MetaText>
    <WeekNumber>{props.week}</WeekNumber>
  </Container>

export default OverviewMeta

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -30px 20px;
`

const MetaText = styled.h3`
  ${textStyles.quote};
  color: ${colorPalette.grey};
`

const WeekNumber = styled.h3`
  ${textStyles.quote};
  color: ${colorPalette.grey};
`
