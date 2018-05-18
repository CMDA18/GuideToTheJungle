// @flow
import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import MainContentGrid from './MainContentGrid'

type Props = {
  page: 'default' | 'faq' | 'jungleMinds' | 'jungleCulture' | 'ourTeam' | 'howWeWork' | 'ourClients',
  children: *
}

const Grid = (props: Props) =>
  <Container>
    <Navigation page={props.page}/>
    <MainContentGrid>{props.children}</MainContentGrid>
  </Container>

export default Grid

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  overflow: hidden;

  nav {
    
  }

  div {
    
  }
`
