// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { ourTeam } from '../../../constants/content/index'
import { employees } from '../../../constants/content/employees'
import EmployeeCollection from '../../EmployeeCollection'
import Task from '../../Task'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

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
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/theWallOfFame'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default OurTeam

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
