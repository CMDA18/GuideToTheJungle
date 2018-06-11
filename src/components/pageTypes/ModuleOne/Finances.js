// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { finances } from '../../../constants/content/index'
import Task from '../../Task'
import FinancielModel from '../../FinancielModel'
import TextAndImage from '../../TextAndImage'
import ButtonPrimary from '../../../shared/buttons/ButtonPrimary'

type Props = {
  test: string
}

class Finances extends Component<Props> {
  render () {
    return (
      <div className='jungleMinds' data-test={this.props.test}>
        <Helmet
          title='jungleMinds'
        />
        <Grid page='jungleMinds'>
          <header>
            <PageTitle {...finances}/>
            <Intro {...finances}/>
          </header>
          <FinancielModel {...finances.financielModel}/>
          <Break />
          <TextAndImage {...finances.textMedia}/>
          <Task {...finances}/>
          <ButtonWrapper>
            <ButtonPrimary
              type='internalLink'
              label='Volgende'
              route='/tasksModuleOne'
            />
          </ButtonWrapper>
        </Grid>
      </div>
    )
  }
}

export default Finances

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: flex-end;
`

const Break = styled.div`
  margin-top: 100px;
`
