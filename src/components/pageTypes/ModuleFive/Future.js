// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { future } from '../../../constants/content/index'

type Props = {
  test: string
}

class Future extends Component<Props> {
  render () {
    return (
      <div className='future' data-test={this.props.test}>
        <Helmet
          title='future'
        />
        <Grid page='ourClients'>
          <header>
            <PageTitle {...future}/>
            <Intro {...future}/>
          </header>
        </Grid>
      </div>
    )
  }
}

export default Future