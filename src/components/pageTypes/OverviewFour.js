// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import OverviewCardCollection from '../OverviewCardCollection'
import OverviewMeta from '../OverviewMeta'

import { overviewFour } from '../../constants/content/overview'

type Props = {
  test: string
}

class OverviewFour extends Component<Props> {
  render () {
    return (
      <div className='Overview' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <header>
            <OverviewMeta {...overviewFour}/>
            <PageTitle {...overviewFour}/>
            <Intro {...overviewFour}/>
          </header>
          <OverviewCardCollection {...overviewFour}/>
        </Wrapper>
      </div>
    )
  };
}

export default OverviewFour

const Wrapper = styled.div`
  margin-top: 20px;
`
