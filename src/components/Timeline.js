// @flow
import React from 'react'
import styled from 'styled-components'
import {
  colorPalette
} from '../styles/styleGuide'

type Props = {
  name: string,
  index: number,
  active: boolean,
  handleTabClick: (index: number) => void

}

const Timeline = (props: Props) =>
  <Wrapper active={props.active} onClick={() => props.handleTabClick(props.index)}>
    <Container>

    </Container>
  </Wrapper>

export default Timeline

const Wrapper = styled.div`
  width: calc((100% / 3) - 2px);
  display: inline-block;
  margin-right: ${props => props.active ? '-1px' : '0'};
  padding: ${props => props.active ? '28px 0 15px' : '15px 0'};
  margin-bottom: ${props => props.active ? '-10px' : '0'};
  background-color: ${props => props.active ? colorPalette.white : colorPalette.lighterBlue};
  outline: none;
  bottom: ${props => props.active ? '7px' : '0'};
  position: relative;
  border: 0;
  box-sizing: border-box;
  border-radius: ${props => props.active ? '4px 4px 0 0' : '0'};
  &:first-of-type {
    border-radius: 4px 0 0 0;
    border-radius: ${props => props.active ? '4px 4px 0 0' : '4px 0 0 0'};
  }
  &:last-of-type {
    width: calc(100% / 3);
    border-radius: 0 4px 0 0;
    border-radius: ${props => props.active ? '4px 4px 0 0' : '0 4px 0 0'};
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
`
