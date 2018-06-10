// http://sherubthakur.github.io/react-horizontal-timeline/
// https://www.npmjs.com/package/react-horizontal-timeline
// https://github.com/oliviertassinari/react-swipeable-views

// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import HorizontalTimeline from 'react-horizontal-timeline'
import SwipeableViews from 'react-swipeable-views'
import {
  colorPalette
} from '../styles/styleGuide'
import { timelineContent } from '../constants/content/index'
import Quote, { QuoteProps } from './Quote'

type IContent = {
  date: string,
  image: string,
  imageCaption: string,
  title: string,
  content: string,
  quote: Array<QuoteProps>
}

type Props = {
  dates: Array<IContent>
}

type State = {
}

class Timeline extends Component<Props, State> {
  state = {
    value: 0,
    previous: 0,
    stylesBackground: '#f8f8f8',
    stylesForeground: '#ffa50d',
    stylesOutline: '#dfdfdf',
    isOpenEnding: true,
    isOpenBeginning: false

  };

  componentWillMount () {
    this.dates = timelineContent.map((entry) => entry.date)
  }

  render () {
    const state = this.state

    const component = timelineContent.map((entry, index) => {
      return (
        <Wrapper className='container' key={index}>
          <Title>{entry.title}</Title>
          <ImageContainer>
            <Media
              backgroundImage={entry.image ? entry.image : entry.image}
            />
            <Caption>{entry.imageCaption}</Caption>
          </ImageContainer>
          <Text>{entry.content}</Text>
          {entry.quote && (
            <Quote {...entry.quote}/>
          )}
        </Wrapper>
      )
    })

    return (

      <Container>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '100%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value })
            }}
            isOpenEnding={state.isOpenEnding}
            isOpenBeginning={state.isOpenBeginning}
            styles={{
              background: state.stylesBackground,
              foreground: state.stylesForeground,
              outline: state.stylesOutline
            }}
            values= {this.dates}
          />

        </div>
        <Content className='text-center'>
          <SwipeableViews
            index={this.state.value}
            onChangeIndex={(value, previous) => {
              this.setState({ value: value, previous: previous })
            }}
            resistance>
            {component}
          </SwipeableViews>

        </Content>

        {/* any arbitrary component can go here */}

      </Container>
    )
  }
}

export default Timeline

const Container = styled.div`
  
  li {
    background-image: none;
  }
  li.button-back.disabled {
    cursor: auto;
  }
`

const Wrapper = styled.div`
`

const Title = styled.h2`
  text-align: center;
`

const Text = styled.p`
  width: 700px;
  margin: auto;
`

const Content = styled.div`

`

const ImageContainer = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: center;
  z-index: 2;
  margin: auto;

  :before {
    content : '';
    width: 0;
    height: 0;
    border-width: 165px 113.5px 0 113.5px;
    border-color: ${colorPalette.orange} transparent transparent transparent;
    border-style: solid;
    position: relative;
    z-index: -1;
    top: 196px;
    right: -75px;
    transform: rotate(-162deg) scale(2.3);
    margin-top: -100px;
  }
`

const Media = styled.div`
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
`

const Caption = styled.p`
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin-top: 12px;
  color: ${colorPalette.blue};
`
