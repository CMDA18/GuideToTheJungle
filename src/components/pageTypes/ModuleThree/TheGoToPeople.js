// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { theGoToPeople } from '../../../constants/content/index'

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
        </Grid>
      </div>
    )
  };
}

export default TheGoToPeople
