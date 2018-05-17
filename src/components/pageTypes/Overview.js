// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import OverviewCardCollection from '../OverviewCardCollection'

import { overview } from '../../constants/content/index'

type Props = {
  test: string
}

class Overview extends Component<Props> {
  render () {
    return (
      <div className='Overview' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <header>
            <PageTitle {...overview}/>
            <Intro {...overview}/>
          </header>
          <OverviewCardCollection {...overview}/>
        </Wrapper>
      </div>
    )
  };
}

export default Overview

const Wrapper = styled.div`
  margin-top: 20px;
`
