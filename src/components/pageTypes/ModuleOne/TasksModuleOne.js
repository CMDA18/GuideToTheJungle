// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleOne } from '../../../constants/content/index'
import Task from '../../Task'
import QuestionList from '../../QuestionList'
import { ModuleOne } from '../../../constants/content/ModuleQuestion'

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
          <Intro {...ModuleOne}/>
          <QuestionList {...ModuleOne} />
        </Grid>
      </div>
    )
  }
}

export default TasksModuleOne
