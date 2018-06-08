// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import Grid from '../Grid'
import { howWeWork } from '../../constants/content/index'
import TextAndImage from '../TextAndImage'

type Props = {
  test: string
}

class HowWeWork extends Component<Props> {
  render () {
    return (
      <div className='HowWeWork' data-test={this.props.test}>
        <Helmet
          title='HowWeWork'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...howWeWork}/>
            <Intro {...howWeWork}/>
          </header>
          <TextAndImage {...howWeWork.textMedia} />

        </Grid>
      </div>
    )
  };
}

export default HowWeWork
