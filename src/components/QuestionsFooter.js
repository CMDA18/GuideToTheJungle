// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { textStyles, colorPalette, shadows } from '../styles/styleGuide'
import ButtonPrimary from '../shared/buttons/ButtonPrimary'
import { toBreakpoint } from '../styles/breakpoints'

type Props = {
  answersCount: number,
  questionsCount: number,
  percentage: number,
  route: string
}

const QuestionsFooter = (props: Props) => (
  <Container>
    <Progress>
      <Wrapper>
        <ProgressText>Question {props.answersCount} of {props.questionsCount}</ProgressText>
        <ProgressBar percentage={props.percentage}/>
      </Wrapper>
      <ButtonWrapper>
        <ButtonPrimary
          type='internalLink'
          label='Versturen'
          route={props.route}
        />
      </ButtonWrapper>
    </Progress>

  </Container>
)

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProgressText = styled.span`
  color: ${colorPalette.darkBlue};
  text-align: center;
  ${textStyles.metaData};
  margin-right: 40px;
  padding: 10px;
`

const Progress = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 201px;

  ${toBreakpoint.md`
    margin: auto;
  `}
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${toBreakpoint.md`
    margin: auto;
    width: 100%;
  `}
`

const ProgressBar = styled.div`
  width: 240px;
  height: 15px;
  background-color: #FFFFFF;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    background-color: ${colorPalette.darkBlue};
    width: ${props => props.percentage}%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: ${colorPalette.lightBlue};
  box-sizing: border-box;
  ${shadows.boxPrimary};
  padding: 10px 0;

`
export default QuestionsFooter
