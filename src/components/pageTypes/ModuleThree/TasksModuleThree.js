// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleThree } from '../../../constants/content/index'

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
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...tasksModuleThree}/>
            <Intro {...tasksModuleThree}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default TasksModuleThree
