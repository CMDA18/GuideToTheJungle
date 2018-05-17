// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from '../Navigation'
import MainContentGrid from '../MainContentGrid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { jungleMinds, overallData } from '../../constants/content/index'
import { TimelineTabs } from '../TimelineTabs'

type Props = {
  test: string
}

class JungleMinds extends Component<Props> {
  render () {
    return (
      <div className='JungleMinds' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <Navigation/>
          <MainContentGrid>
            <header>
              <PageTitle {...jungleMinds}/>
              <Intro {...jungleMinds}/>
              <TimelineTabs {...overallData} />
            </header>
          </MainContentGrid>
        </Wrapper>
      </div>
    )
  };
}

export default JungleMinds

const Wrapper = styled.div`
  display: flex;
`
