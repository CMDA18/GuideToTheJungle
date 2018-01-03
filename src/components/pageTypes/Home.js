// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { paths } from '../../routes'

type Props = {
  test: string
}

const Title = styled.h1`
  color: palevioletred;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  background: papayawhip;
  padding: 5em;
  min-height: 100vh;
`

class Home extends Component<Props> {
  render () {
    return (
      <div data-test={this.props.test}>
        <Helmet
          title='Home'
        />
        <Wrapper>
          <header>
            <h1>Welcome to React</h1>
            <Title>Basic Project</Title>
          </header>
          <ul>
            { Object.keys(paths).map((path, i) => (
              <li key={i}>
                <Link to={paths[path]} title={path}>{path}</Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      </div>
    )
  };
}

export default Home
