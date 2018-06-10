// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleTwo } from '../../../constants/content/index'
import Task from '../../Task'
import QuestionList from '../../QuestionList'
import { ModuleTwo } from '../../../constants/content/ModuleQuestion'
import QuestionsFooter from '../../QuestionsFooter'

type Props = {
  test: string
}

class TasksModuleTwo extends Component<Props> {
  render () {
    return (
      <div className='tasksModuleTwo' data-test={this.props.test}>
        <Helmet
          title='tasksModuleTwo'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...tasksModuleTwo}/>
            <Intro {...tasksModuleTwo}/>
          </header>
          <Task {...tasksModuleTwo}/>
          <Break />
          <Intro {...tasksModuleTwo}/>
          <QuestionList {...ModuleTwo} />
          <QuestionsFooter
            answersCount='0'
            questionsCount='0'
            percentage='0'
            route='/overviewThree'
          />
        </Grid>
      </div>
    )
  };
}

export default TasksModuleTwo

const Break = styled.div`
  margin-top: 100px;
`
