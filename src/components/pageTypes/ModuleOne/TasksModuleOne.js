// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleOne } from '../../../constants/content/index'

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
        </Grid>
      </div>
    )
  };
}

export default TasksModuleOne
