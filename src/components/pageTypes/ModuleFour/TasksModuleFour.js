// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleFour } from '../../../constants/content/index'

type Props = {
  test: string
}

class TasksModuleFour extends Component<Props> {
  render () {
    return (
      <div className='tasksModuleFour' data-test={this.props.test}>
        <Helmet
          title='tasksModuleFour'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...tasksModuleFour}/>
            <Intro {...tasksModuleFour}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default TasksModuleFour
