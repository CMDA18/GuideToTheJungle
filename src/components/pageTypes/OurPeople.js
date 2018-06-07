// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../Grid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import TextAndImage from '../TextAndImage'
import { ourPeople } from '../../constants/content/index'

type Props = {
  test: string
}

class OurPeople extends Component<Props> {
  render () {
    return (
      <div className='OurPeople' data-test={this.props.test}>
        <Helmet
          title='OurPeople'
        />
        <Grid page='ourTeam'>
          <header>
            <PageTitle {...ourPeople}/>
            <Intro {...ourPeople}/>
          </header>
          <TextAndImage {...ourPeople.textMedia} />
        </Grid>
      </div>
    )
  };
}

export default OurPeople
