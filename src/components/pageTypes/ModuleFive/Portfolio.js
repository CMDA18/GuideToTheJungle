// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { portfolio } from '../../../constants/content/index'
import TextAndImage from '../../TextAndImage'
import Task from '../../Task'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class Portfolio extends Component<Props> {
  render () {
    return (
      <div className='portfolio' data-test={this.props.test}>
        <Helmet
          title='portfolio'
        />
        <Grid page='ourClients'>
          <header>
            <PageTitle {...portfolio}/>
            <Intro {...portfolio}/>
          </header>
          <TextAndImage {...portfolio.textMedia} />
          <Task {...portfolio}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/future'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  }
}

export default Portfolio

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
