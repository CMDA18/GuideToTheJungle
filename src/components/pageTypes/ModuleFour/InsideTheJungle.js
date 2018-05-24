// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { insideTheJungle } from '../../../constants/content/index'

type Props = {
  test: string
}

class InsideTheJungle extends Component<Props> {
  render () {
    return (
      <div className='insideTheJungle' data-test={this.props.test}>
        <Helmet
          title='insideTheJungle'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...insideTheJungle}/>
            <Intro {...insideTheJungle}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default InsideTheJungle