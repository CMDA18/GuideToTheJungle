// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { ourStory } from '../../../constants/content/modules/moduleOne'
import { faq } from '../../../constants/content'

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
            <PageTitle {...faq}/>
            <Intro {...ourStory}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default OurStory
