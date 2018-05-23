// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { portfolio } from '../../../constants/content/index'

type Props = {
  test: string
}

class Portfolio extends Component<Props> {
  render () {
    return (
      <div className='portfolio' data-test={this.props.test}>
        <Helmet
          title='portfolio'
        />
        <Grid page='ourClients'>
          <header>
            <PageTitle {...portfolio}/>
            <Intro {...portfolio}/>
          </header>
        </Grid>
      </div>
    )
  }
}

export default Portfolio
