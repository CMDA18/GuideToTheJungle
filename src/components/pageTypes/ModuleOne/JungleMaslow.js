// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { jungleMaslow } from '../../../constants/content/index'
import TextAndImage from '../../TextAndImage'
import Task from '../../Task'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

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
            <TextAndImage {...jungleMaslow.textMedia}/>
          </header>
          <Task {...jungleMaslow}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/finances'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default JungleMaslow

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
