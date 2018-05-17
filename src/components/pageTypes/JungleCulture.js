// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Navigation from '../Navigation'
import MainContentGrid from '../MainContentGrid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import TextAndImage from '../TextAndImage'
import { jungleCulture } from '../../constants/content/index'
import Quote from '../Quote'

type Props = {
  test: string
}

class JungleCulture extends Component<Props> {
  render () {
    return (
      <div className='JungleCulture' data-test={this.props.test}>
        <Helmet
          title='JungleCulture'
        />
        <Wrapper>
          <Navigation page='jungleCulture'/>
          <MainContentGrid>
            <PageTitle {...jungleCulture}/>
            <Intro {...jungleCulture}/>
            <TextAndImage {...jungleCulture} />
            <Quote {...jungleCulture}/>
          </MainContentGrid>
        </Wrapper>
      </div>
    )
  };
}

export default JungleCulture

const Wrapper = styled.div`
  display: flex;
`
