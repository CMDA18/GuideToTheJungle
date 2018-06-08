
// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import Task from '../../Task'
import { ourMethode } from '../../../constants/content/index'

type Props = {
  test: string,
  centerImage: string
}

class OurMethode extends Component<Props> {
  render () {
    return (
      <div className='ourMethode' data-test={this.props.test}>
        <Helmet
          title='outsideTheJungle'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...ourMethode}/>
            <Intro {...ourMethode}/>
          </header>
          <Image src={ourMethode.centerImage}/>
          <TextAndImage {...ourMethode.textMedia} />
          <Task {...ourMethode}/>
        </Grid>
      </div>
    )
  };
}

export default OurMethode

const Image = styled.img`
  max-width: 100%;
`
