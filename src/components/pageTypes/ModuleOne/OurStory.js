// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import Timeline from '../../Timeline'
import { ourStory, timelineContent } from '../../../constants/content/index'
import Task from '../../Task'

type Props = {
  test: string
}

class OurStory extends Component<Props> {
  render () {
    return (
      <div className='jungleMinds' data-test={this.props.test}>
        <Helmet
          title='jungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...ourStory}/>
            <Intro {...ourStory}/>
          </header>
          <Timeline {...timelineContent} />
          <Task {...ourStory}/>
        </Grid>
      </div>
    )
  };
}

export default OurStory
