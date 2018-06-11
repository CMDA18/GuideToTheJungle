// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { clients } from '../../../constants/content/index'
import { logos } from '../../../constants/content/logos'
import LogosCollection from '../../LogosCollection'
import Task from '../../Task'
import Quote from '../../Quote'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

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
          <LogosCollection {...logos}/>
          <Quote {...clients.quote}/>
          <Task {...clients}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/portfolio'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  }
}

export default Clients

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
