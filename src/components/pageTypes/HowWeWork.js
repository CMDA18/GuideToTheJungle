// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import Grid from '../Grid'
import { howWeWork } from '../../constants/content/index'
import TextAndImage from '../TextAndImage'
import ButtonPrimary from '../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class HowWeWork extends Component<Props> {
  render () {
    return (
      <div className='HowWeWork' data-test={this.props.test}>
        <Helmet
          title='HowWeWork'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...howWeWork}/>
            <Intro {...howWeWork}/>
          </header>
          <TextAndImage {...howWeWork.textMedia} />
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Begin module 4'
              route='/ourMethode'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default HowWeWork

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  justify-content: center;
`
