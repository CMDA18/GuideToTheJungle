// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from '../Navigation'
import MainContentGrid from '../MainContentGrid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { faq } from '../../constants/content/index'

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
        <Wrapper>
          <Navigation page='faq'/>
          <MainContentGrid>
            <header>
              <PageTitle {...faq}/>
              <Intro {...faq}/>
            </header>
          </MainContentGrid>
        </Wrapper>
      </div>
    )
  };
}

export default FAQ

const Wrapper = styled.div`
  display: flex;
`
