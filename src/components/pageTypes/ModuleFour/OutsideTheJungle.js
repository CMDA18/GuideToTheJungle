// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import Task from '../../Task'
import { outsideTheJungle } from '../../../constants/content/index'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class OutsideTheJungle extends Component<Props> {
  render () {
    return (
      <div className='outsideTheJungle' data-test={this.props.test}>
        <Helmet
          title='outsideTheJungle'
        />
        <Grid page='howWeWork'>
          <header>
            <PageTitle {...outsideTheJungle}/>
            <Intro {...outsideTheJungle}/>
          </header>
          <TextAndImage {...outsideTheJungle.textMedia} />
          <Task {...outsideTheJungle}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/tasksModuleFour'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default OutsideTheJungle

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
