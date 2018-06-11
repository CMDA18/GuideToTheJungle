// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import OverviewCardCollection from '../OverviewCardCollection'
import OverviewMeta from '../OverviewMeta'

import { overviewThree } from '../../constants/content/overview'

type Props = {
  test: string
}

class OverviewThree extends Component<Props> {
  render () {
    return (
      <div className='Overview' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <header>
            <OverviewMeta {...overviewThree}/>
            <PageTitle {...overviewThree}/>
            <Intro {...overviewThree}/>
          </header>
          <OverviewCardCollection {...overviewThree}/>
        </Wrapper>
      </div>
    )
  };
}

export default OverviewThree

const Wrapper = styled.div`
  margin-top: 20px;
`
