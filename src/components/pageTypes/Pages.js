// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { paths } from '../../routes'

type Props = {
  test: string
}

class Home extends Component<Props> {
  render () {
    return (
      <div data-test={this.props.test}>
        <Helmet
          title='Home'
        />
        <Wrapper>
          <MainContent>
            <ul>
              { Object.keys(paths).map((path, i) => (
                <li key={i}>
                  <Link to={paths[path]} title={path}>{path}</Link>
                </li>
              ))}
            </ul>
          </MainContent>
        </Wrapper>
      </div>
    )
  };
}

export default Home

const Wrapper = styled.div`
  display: flex;
`

const MainContent = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background: papayawhip;
  padding: 5em;
`
