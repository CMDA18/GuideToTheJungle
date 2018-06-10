// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import { jungleMinds } from '../../../constants/content/index'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class JungleMinds extends Component<Props> {
  render () {
    return (
      <div className='JungleMinds' data-test={this.props.test}>
        <Helmet
          title='JungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...jungleMinds}/>
            <Intro {...jungleMinds}/>
          </header>
          <TextAndImage {...jungleMinds.textMedia} />
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Begin module 1'
              route='/ourStory'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  }
}

export default JungleMinds

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  justify-content: center;
`
