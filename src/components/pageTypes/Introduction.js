// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Login from '../Login'

type Props = {
  test: string
}

class Introduction extends Component<Props> {
  render () {
    return (
      <div className='Intro' data-test={this.props.test}>
        <Helmet
          title='Intro'
        />
        <Container>
          <Login />
        </Container>

      </div>
    )
  };
}

export default Introduction

const Container = styled.div`
  background-image: url(./images/introductionBG.jpg);
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`
