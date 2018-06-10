// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import OverviewCardCollection from '../OverviewCardCollection'
import OverviewMeta from '../OverviewMeta'

import { overviewFive } from '../../constants/content/overview'

type Props = {
  test: string

}

class OverviewFive extends Component<Props> {
  render () {
    return (
      <div className='Overview' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <header>
            <OverviewMeta {...overviewFive}/>
            <PageTitle {...overviewFive}/>
            <Intro {...overviewFive}/>
          </header>
          <OverviewCardCollection {...overviewFive}/>
        </Wrapper>
      </div>
    )
  };
}

export default OverviewFive

const Wrapper = styled.div`
  margin-top: 20px;
`
