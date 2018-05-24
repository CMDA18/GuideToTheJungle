// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { finances } from '../../../constants/content/index'
import Task from '../../Task'
import FinancielModel from '../../FinancielModel'
import TextAndImage from '../../TextAndImage'

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
          <TextAndImage {...finances.textMedia}/>
          <Task {...finances}/>

        </Grid>
      </div>
    )
  }
}

export default Finances
