// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { theGoToPeople } from '../../../constants/content/index'
import EmployeeCollection from '../../EmployeeCollection'
import Task from '../../Task'
import { theGoToEmployees } from '../../../constants/content/employees'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class TheGoToPeople extends Component<Props> {
  render () {
    return (
      <div className='theGoToPeople' data-test={this.props.test}>
        <Helmet
          title='theGoToPeople'
        />
        <Grid page='ourTeam'>
          <header>
            <PageTitle {...theGoToPeople}/>
            <Intro {...theGoToPeople}/>
          </header>
          <EmployeeCollection {...theGoToEmployees}/>
          <Task {...theGoToPeople}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/tasksModuleThree'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default TheGoToPeople

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
