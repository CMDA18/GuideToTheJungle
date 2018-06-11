// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../Grid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import TextAndImage from '../TextAndImage'
import { ourPeople } from '../../constants/content/index'
import ButtonPrimary from '../../shared/buttons/ButtonPrimary'

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
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Begin module 3'
              route='/ourTeam'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default OurPeople

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  justify-content: center;
`
