// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { ourClients } from '../../constants/content/index'
import TextAndImage from '../TextAndImage'
import Grid from '../Grid'

type Props = {
  test: string
}

class OurClients extends Component<Props> {
  render () {
    return (
      <div className='OurClients' data-test={this.props.test}>
        <Helmet
          title='OurClients'
        />
        <Grid page='ourClients'>
          <header>
            <PageTitle {...ourClients}/>
            <Intro {...ourClients}/>
          </header>
          <TextAndImage {...ourClients.textMedia} />
        </Grid>
      </div>
    )
  };
}

export default OurClients
