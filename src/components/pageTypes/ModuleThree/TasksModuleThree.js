// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleThree } from '../../../constants/content/index'
import QuestionList from '../../QuestionList'
import { ModuleThree } from '../../../constants/content/ModuleQuestion'
import Task from '../../Task'
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
          <Intro {...ModuleThree}/>
          <QuestionList {...ModuleThree} />
        </Grid>
      </div>
    )
  };
}

export default TasksModuleThree
