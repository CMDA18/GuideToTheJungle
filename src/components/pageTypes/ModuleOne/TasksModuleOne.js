// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleOne } from '../../../constants/content/index'
import Task from '../../Task'
import QuestionList from '../../QuestionList'
import { ModuleOne } from '../../../constants/content/ModuleQuestion'
import QuestionsFooter from '../../QuestionsFooter'

type Props = {
  test: string
}

class TasksModuleOne extends Component<Props> {
  render () {
    return (
      <div className='jungleMinds' data-test={this.props.test}>
        <Helmet
          title='jungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...tasksModuleOne}/>
            <Intro {...tasksModuleOne}/>
          </header>
          <Task {...tasksModuleOne}/>
          <Break />
          <Intro {...ModuleOne}/>
          <QuestionList {...ModuleOne} />
          <QuestionsFooter
            answersCount='0'
            questionsCount='6'
            percentage='0'
            route='/overviewTwo'
          />
        </Grid>
      </div>
    )
  }
}

export default TasksModuleOne

const Break = styled.div`
  margin-top: 100px;
`
