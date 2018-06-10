// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import TextAndImage from '../../TextAndImage'
import Quote from '../../Quote'
import Task from '../../Task'
import { jungleFormula } from '../../../constants/content/index'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class JungleFormula extends Component<Props> {
  render () {
    return (
      <div className='JungleFormula' data-test={this.props.test}>
        <Helmet
          title='JungleFormula'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...jungleFormula}/>
            <Intro {...jungleFormula}/>
          </header>
          <TextAndImage {...jungleFormula.textMedia} />
          <Quote {...jungleFormula.quote}/>
          <Task {...jungleFormula}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/jungleDays'
            />
          </ButtonWrapper>
        </Grid>

      </div>
    )
  };
}

export default JungleFormula

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  justify-content: flex-end;
`
