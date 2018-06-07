// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleTwo } from '../../../constants/content/index'
import Task from '../../Task'
import QuestionList from '../../QuestionList'
import { ModuleTwo } from '../../../constants/content/ModuleQuestion'

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
          <Intro {...tasksModuleTwo}/>
          <QuestionList {...ModuleTwo} />
        </Grid>
      </div>
    )
  };
}

export default TasksModuleTwo
