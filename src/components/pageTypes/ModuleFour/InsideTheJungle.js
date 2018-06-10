// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import Task from '../../Task'
import { insideTheJungle } from '../../../constants/content/index'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class InsideTheJungle extends Component<Props> {
  render () {
    return (
      <div className='insideTheJungle' data-test={this.props.test}>
        <Helmet
          title='insideTheJungle'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...insideTheJungle}/>
            <Intro {...insideTheJungle}/>
          </header>
          <TextAndImage {...insideTheJungle.textMedia} />
          <Task {...insideTheJungle}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/outsideTheJungle'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default InsideTheJungle

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
