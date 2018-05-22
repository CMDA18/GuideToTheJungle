// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { ourExpertises } from '../../../constants/content/index'

type Props = {
  test: string
}

class OurExpertises extends Component<Props> {
  render () {
    return (
      <div className='ourExpertises' data-test={this.props.test}>
        <Helmet
          title='ourExpertises'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...ourExpertises}/>
            <Intro {...ourExpertises}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default OurExpertises
