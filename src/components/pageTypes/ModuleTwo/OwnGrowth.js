// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import Quote from '../../Quote'
import { ownGrowth } from '../../../constants/content/index'

type Props = {
  test: string
}

class OwnGrowth extends Component<Props> {
  render () {
    return (
      <div className='ownGrowth' data-test={this.props.test}>
        <Helmet
          title='ownGrowth'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...ownGrowth}/>
            <Intro {...ownGrowth}/>
          </header>
          <TextAndImage {...ownGrowth} />
          <Quote {...ownGrowth.quote}/>
        </Grid>
      </div>
    )
  };
}

export default OwnGrowth
