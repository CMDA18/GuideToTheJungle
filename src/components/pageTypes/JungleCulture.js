// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../Grid'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import TextAndImage from '../TextAndImage'
import { jungleCulture } from '../../constants/content/index'
import ButtonPrimary from '../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class JungleCulture extends Component<Props> {
  render () {
    return (
      <div className='JungleCulture' data-test={this.props.test}>
        <Helmet
          title='JungleCulture'
        />
        <Grid page='jungleCulture'>
          <header>
            <PageTitle {...jungleCulture}/>
            <Intro {...jungleCulture}/>
          </header>
          <TextAndImage {...jungleCulture.textMedia} />
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Begin module 2'
              route='/jungleFormula'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default JungleCulture

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  justify-content: center;
`
