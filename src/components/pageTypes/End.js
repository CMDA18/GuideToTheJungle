// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { end } from '../../constants/content/index'

type Props = {
  test: string
}

class End extends Component<Props> {
  render () {
    return (
      <div className='Intro' data-test={this.props.test}>
        <Helmet
          title='Intro'
        />
        <Container>
          <Text dangerouslySetInnerHTML={{__html: `${end.text}`}} />
        </Container>

      </div>
    )
  };
}

export default End

const Container = styled.div`
  background-image: url(./images/endBG.jpg);
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`

const Text = styled.div`
  max-width: 650px;
  text-align: center;
  margin: auto;
  padding-top: 350px;

`
