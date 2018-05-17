// @flow
import React from 'react'
import styled from 'styled-components'
import { fromBreakpoint } from '../styles/breakpoints'
import {
  colorPalette
} from '../styles/styleGuide'
import OverviewCard from './OverviewCard'

type ICards = {
  slug: string,
  image: string,
  title: string,
  text: string,
  unlockText?: string,
  unlocked: 'yes' | 'no'
}

type Props ={
  cards: Array<ICards>
}

const OverviewCardCollection = (props: Props) => (
  <Container>
    <CardsWrapper>
      {(props.cards || []).map((item, index) => (
        <OverviewCard
          key={index}
          {...item}
        />
      ))}
    </CardsWrapper>
  </Container>
)

export default OverviewCardCollection

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    margin-bottom: 40px;
    ${fromBreakpoint.md`
      width: calc(50% - 10px);
      width: calc( ((1/2) * 100%) - 10px );
    `} ${fromBreakpoint.lg`
      width: calc( ((1/3) * 100%) - (80px / 3));
      &:nth-of-type(3n + 2) {
        margin-left: 40px;
        margin-right: 40px;
      }
    `};
  }
  ${fromBreakpoint.md`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `} ${fromBreakpoint.lg`
    justify-content: flex-start;
  `};
`

const Container = styled.section`
  background-color: ${colorPalette.lightBlue};
  display: flex;
  flex-wrap: wrap;
  padding: 50px 50px 100px;
`
