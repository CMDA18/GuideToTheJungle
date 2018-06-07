// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { ourTeam } from '../../../constants/content/index'
import { employees } from '../../../constants/content/employees'
import EmployeeCollection from '../../EmployeeCollection'
import Task from '../../Task'

type Props = {
  test: string
}

class OurTeam extends Component<Props> {
  render () {
    return (
      <div className='ourTeam' data-test={this.props.test}>
        <Helmet
          title='ourTeam'
        />
        <Grid page='ourTeam'>
          <header>
            <PageTitle {...ourTeam}/>
            <Intro {...ourTeam}/>
          </header>
          <EmployeeCollection {...employees}/>
          <Task {...ourTeam}/>
        </Grid>
      </div>
    )
  };
}

export default OurTeam
