// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { outsideTheJungle } from '../../../constants/content/index'

type Props = {
  test: string
}

class OutsideTheJungle extends Component<Props> {
  render () {
    return (
      <div className='outsideTheJungle' data-test={this.props.test}>
        <Helmet
          title='outsideTheJungle'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...outsideTheJungle}/>
            <Intro {...outsideTheJungle}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default OutsideTheJungle
