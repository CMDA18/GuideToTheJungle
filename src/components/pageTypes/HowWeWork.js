// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from '../Navigation'
import MainContentGrid from '../MainContentGrid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { howWeWork } from '../../constants/content/index'

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
        <Wrapper>
          <Navigation page='howWeWork'/>
          <MainContentGrid>
            <header>
              <PageTitle {...howWeWork}/>
              <Intro {...howWeWork}/>
            </header>
          </MainContentGrid>
        </Wrapper>
      </div>
    )
  };
}

export default HowWeWork

const Wrapper = styled.div`
  display: flex;
`
