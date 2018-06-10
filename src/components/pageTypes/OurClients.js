// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import { ourClients } from '../../constants/content/index'
import TextAndImage from '../TextAndImage'
import Grid from '../Grid'
import ButtonPrimary from '../../shared/buttons/ButtonPrimary'

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
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Begin module 5'
              route='/clients'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default OurClients

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  justify-content: center;
`
