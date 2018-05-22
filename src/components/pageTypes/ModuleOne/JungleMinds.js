// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import { jungleMinds } from '../../../constants/content/index'

type Props = {
  test: string
}

class JungleMinds extends Component<Props> {
  render () {
    return (
      <div className='JungleMinds' data-test={this.props.test}>
        <Helmet
          title='JungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...jungleMinds}/>
            <Intro {...jungleMinds}/>
          </header>
          <TextAndImage {...jungleMinds} />
          <Video src="https://cdn.jungleminds.com/video/header/jungleminds_web_720p.mp4"
            width="1000"
            height="500"
            frameBorder="0"
            allowFullScreen
          />
        </Grid>
      </div>
    )
  }
}

export default JungleMinds

const Video = styled.iframe`
  position: absolute;
  width: 72%;
`
