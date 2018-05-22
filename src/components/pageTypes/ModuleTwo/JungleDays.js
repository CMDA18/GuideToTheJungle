// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import Quote from '../../Quote'
import { jungleDays } from '../../../constants/content/index'

type Props = {
  test: string
}

class JungleDays extends Component<Props> {
  render () {
    return (
      <div className='jungleDays' data-test={this.props.test}>
        <Helmet
          title='jungleDays'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...jungleDays}/>
            <Intro {...jungleDays}/>
          </header>
          <TextAndImage {...jungleDays} />
          <Quote {...jungleDays.quote}/>
        </Grid>

      </div>
    )
  };
}

export default JungleDays
