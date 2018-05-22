// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../Grid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import TextAndImage from '../TextAndImage'
import { jungleCulture } from '../../constants/content/index'

type Props = {
  test: string
}

class JungleCulture extends Component<Props> {
  render () {
    return (
      <div className='JungleCulture' data-test={this.props.test}>
        <Helmet
          title='JungleCulture'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...jungleCulture}/>
            <Intro {...jungleCulture}/>
          </header>
          <TextAndImage {...jungleCulture} />
        </Grid>

      </div>
    )
  };
}

export default JungleCulture
