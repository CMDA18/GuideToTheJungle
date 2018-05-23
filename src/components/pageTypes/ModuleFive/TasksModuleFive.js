// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { tasksModuleFive } from '../../../constants/content/index'

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
        </Grid>
      </div>
    )
  }
}

export default TasksModuleFive
