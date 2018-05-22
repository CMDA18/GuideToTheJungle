// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { theWallOfFame } from '../../../constants/content/index'

type Props = {
  test: string
}

class TheWallOfFame extends Component<Props> {
  render () {
    return (
      <div className='theWallOfFame' data-test={this.props.test}>
        <Helmet
          title='theWallOfFame'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...theWallOfFame}/>
            <Intro {...theWallOfFame}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default TheWallOfFame
