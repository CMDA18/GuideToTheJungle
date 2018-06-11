// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import Timeline from '../../Timeline'
import Task from '../../Task'
import { ourStory, timelineContent } from '../../../constants/content/index'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class OurStory extends Component<Props> {
  render () {
    return (
      <div className='jungleMinds' data-test={this.props.test}>
        <Helmet
          title='jungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...ourStory}/>
            <Intro {...ourStory}/>
          </header>
          <Timeline {...timelineContent} />
          <Task {...ourStory}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/jungleMaslow'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  };
}

export default OurStory

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`
