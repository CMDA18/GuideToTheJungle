// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../Grid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { faq } from '../../constants/content/index'
import QuestionCollection from '../QuestionCollection'

type Props = {
  test: string
}

class FAQ extends Component<Props> {
  render () {
    return (
      <div className='FAQ' data-test={this.props.test}>
        <Helmet
          title='FAQ'
        />
        <Grid page='faq'>
          <header>
            <PageTitle {...faq}/>
            <Intro {...faq}/>
          </header>
          <QuestionCollection {...faq} />
        </Grid>
      </div>
    )
  };
}

export default FAQ
