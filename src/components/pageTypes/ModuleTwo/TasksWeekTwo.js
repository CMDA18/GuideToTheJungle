// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksWeekTwo } from '../../../constants/content/index'

type Props = {
  test: string
}

class TasksWeekTwo extends Component<Props> {
  render () {
    return (
      <div className='tasksWeekTwo' data-test={this.props.test}>
        <Helmet
          title='tasksWeekTwo'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...tasksWeekTwo}/>
            <Intro {...tasksWeekTwo}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default TasksWeekTwo
