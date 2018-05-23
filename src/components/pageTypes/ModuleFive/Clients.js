// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { clients } from '../../../constants/content/index'

type Props = {
  test: string
}

class Clients extends Component<Props> {
  render () {
    return (
      <div className='clients' data-test={this.props.test}>
        <Helmet
          title='clients'
        />
        <Grid page='ourClients'>
          <header>
            <PageTitle {...clients}/>
            <Intro {...clients}/>
          </header>
        </Grid>
      </div>
    )
  }
}

export default Clients
