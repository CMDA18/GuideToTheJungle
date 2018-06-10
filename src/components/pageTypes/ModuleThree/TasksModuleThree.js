// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleThree } from '../../../constants/content/index'
import QuestionList from '../../QuestionList'
import { ModuleThree } from '../../../constants/content/ModuleQuestion'
import Task from '../../Task'
import QuestionsFooter from '../../QuestionsFooter'

type Props = {
  test: string
}

class TasksModuleThree extends Component<Props> {
  render () {
    return (
      <div className='tasksModuleThree' data-test={this.props.test}>
        <Helmet
          title='tasksModuleThree'
        />
        <Grid page='ourTeam'>
          <header>
            <PageTitle {...tasksModuleThree}/>
            <Intro {...tasksModuleThree}/>
          </header>
          <Task {...tasksModuleThree}/>
          <Break />
          <Intro {...ModuleThree}/>
          <QuestionList {...ModuleThree} />
          <QuestionsFooter
            answersCount='0'
            questionsCount='0'
            percentage='0'
            route='/overviewFour'
          />
        </Grid>
      </div>
    )
  };
}

export default TasksModuleThree

const Break = styled.div`
  margin-top: 100px;
`
