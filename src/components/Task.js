// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'

type ITasks = {
  task: string
}

type Props = {
  subTitle?: string,
  tasks: Array<ITasks>
}

const Task = (props: Props) =>
  <Container>
    <SubTitle>{props.subTitle}</SubTitle>
    {props.tasks.map((item, index) => (
      <Question key={index}>{item.task}</Question>
    ))}
  </Container>

export default Task

const Container = styled.div`
  padding: 20px 0;
  border-bottom: 3px solid ${colorPalette.lightBlue};
  width: 100%;
`

const Question = styled.p`
  ${textStyles.general};
`

const SubTitle = styled.h3`
  ${textStyles.subTitle};
`
