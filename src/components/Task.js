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
  taskTitle?: string,
  tasks: Array<ITasks>
}

const Task = (props: Props) =>
  <Container>
    <SubTitle>{props.taskTitle}</SubTitle>
    {(props.tasks || []).map((item, index) => (
      <Question key={index} dangerouslySetInnerHTML={{__html: `${item.task}`}}/>
    ))}
  </Container>

export default Task

const Container = styled.div`
  padding: 20px 0;
  background-color: ${colorPalette.lightBlue};
  padding: 20px 50px;
  max-width: 100%;
`

const Question = styled.p`
  ${textStyles.general};
`

const SubTitle = styled.h3`
  ${textStyles.title};
`
