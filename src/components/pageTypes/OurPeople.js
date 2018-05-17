// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from '../Navigation'
import MainContentGrid from '../MainContentGrid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { ourPeople } from '../../constants/content/index'

type Props = {
  test: string
}

class OurPeople extends Component<Props> {
  render () {
    return (
      <div className='OurPeople' data-test={this.props.test}>
        <Helmet
          title='OurPeople'
        />
        <Wrapper>
          <Navigation page='ourTeam'/>
          <MainContentGrid>
            <header>
              <PageTitle {...ourPeople}/>
              <Intro {...ourPeople}/>
            </header>
          </MainContentGrid>
        </Wrapper>
      </div>
    )
  };
}

export default OurPeople

const Wrapper = styled.div`
  display: flex;
`
