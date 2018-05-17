// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from '../Navigation'
import MainContentGrid from '../MainContentGrid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { ourClients } from '../../constants/content/index'

type Props = {
  test: string
}

class OurClients extends Component<Props> {
  render () {
    return (
      <div className='OurClients' data-test={this.props.test}>
        <Helmet
          title='OurClients'
        />
        <Wrapper>
          <Navigation/>
          <MainContentGrid>
            <header>
              <PageTitle {...ourClients}/>
              <Intro {...ourClients}/>
            </header>
          </MainContentGrid>
        </Wrapper>
      </div>
    )
  };
}

export default OurClients

const Wrapper = styled.div`
  display: flex;
`
