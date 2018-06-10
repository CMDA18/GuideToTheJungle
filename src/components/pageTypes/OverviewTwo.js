// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import OverviewCardCollection from '../OverviewCardCollection'
import OverviewMeta from '../OverviewMeta'

import { overviewTwo } from '../../constants/content/overview'

type Props = {
  test: string
}

class OverviewTwo extends Component<Props> {
  render () {
    return (
      <div className='Overview' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <header>
            <OverviewMeta {...overviewTwo}/>
            <PageTitle {...overviewTwo}/>
            <Intro {...overviewTwo}/>
          </header>
          <OverviewCardCollection {...overviewTwo}/>
        </Wrapper>
      </div>
    )
  };
}

export default OverviewTwo

const Wrapper = styled.div`
  margin-top: 20px;
`
