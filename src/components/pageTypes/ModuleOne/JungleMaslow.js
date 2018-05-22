// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { jungleMaslow } from '../../../constants/content/index'
import TextAndImage from '../../TextAndImage'

type Props = {
  test: string
}

class JungleMaslow extends Component<Props> {
  render () {
    return (
      <div className='jungleMinds' data-test={this.props.test}>
        <Helmet
          title='J ungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...jungleMaslow}/>
            <Intro {...jungleMaslow}/>
            <TextAndImage {...jungleMaslow}/>
          </header>
        </Grid>
      </div>
    )
  };
}

export default JungleMaslow
