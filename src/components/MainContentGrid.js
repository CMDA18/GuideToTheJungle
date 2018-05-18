// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  children: *
}

const MainContentGrid = (props: Props) =>
  <MainContent>
    {props.children}
  </MainContent>

export default MainContentGrid

const MainContent = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 20px 50px 100px;
  overflow: scroll;
`
