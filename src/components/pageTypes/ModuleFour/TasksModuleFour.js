// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleFour } from '../../../constants/content/index'
import QuestionList from '../../QuestionList'
import { ModuleFour } from '../../../constants/content/ModuleQuestion'
import Task from '../../Task'
import QuestionsFooter from '../../QuestionsFooter'

type Props = {
  test: string
}

class TasksModuleFour extends Component<Props> {
  render () {
    return (
      <div className='tasksModuleFour' data-test={this.props.test}>
        <Helmet
          title='tasksModuleFour'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...tasksModuleFour}/>
            <Intro {...tasksModuleFour}/>
          </header>
          <Task {...tasksModuleFour}/>
          <Break />
          <Intro {...ModuleFour}/>
          <QuestionList {...ModuleFour} />
          <QuestionsFooter
            answersCount='0'
            questionsCount='0'
            percentage='0'
            route='/overviewFive'
          />
        </Grid>
      </div>
    )
  };
}

export default TasksModuleFour

const Break = styled.div`
  margin-top: 100px;
`
