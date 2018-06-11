// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleFive } from '../../../constants/content/index'
import QuestionList from '../../QuestionList'
import { ModuleFive } from '../../../constants/content/ModuleQuestion'
import Task from '../../Task'
import QuestionsFooter from '../../QuestionsFooter'

type Props = {
  test: string
}

class TasksModuleFive extends Component<Props> {
  render () {
    return (
      <div className='tasksModuleFive' data-test={this.props.test}>
        <Helmet
          title='tasksModuleFive'
        />
        <Grid page='ourClients'>
          <header>
            <PageTitle {...tasksModuleFive}/>
            <Intro {...tasksModuleFive}/>
          </header>
          <Task {...tasksModuleFive}/>
          <Break />
          <Intro {...ModuleFive}/>
          <QuestionList {...ModuleFive} />
          <QuestionsFooter
            answersCount='3'
            questionsCount='5'
            percentage='60'
            route='/end'
          />
        </Grid>
      </div>
    )
  }
}

export default TasksModuleFive

const Break = styled.div`
  margin-top: 100px;
`
