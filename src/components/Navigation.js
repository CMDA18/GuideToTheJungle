// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { navigationPaths } from '../routes'
import {
  colorPalette,
  textStyles
} from '../styles/styleGuide'
import Jungle from '../shared/elements/Jungle'

type Props = {
}

const Navigation = (props: Props) =>
  <Container>
    <Wrapper>
      <Logo><Jungle/></Logo>
      <List>
        { Object.keys(navigationPaths).map((path, i) => (
          <Item key={i}>
            <Line/>
            {/* https://reacttraining.com/react-router/web/api/NavLink */}
            <ItemLink to={navigationPaths[path]} activeStyle={{
              color: `${colorPalette.orange}`
            }} title={path}>{path}</ItemLink>

          </Item>
        ))}
      </List>
    </Wrapper>
  </Container>

export default Navigation

const Container = styled.div`
  background-color: ${colorPalette.lightBlue};
  width: 300px;
`

const Wrapper = styled.div`
  position: fixed;
`

const Logo = styled.div`
  padding: 25px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  padding: 0;

  li:first-of-type {
    span {
      display: none;
    }
  }
`

const Item = styled.li`
  ${textStyles.navigationItems};

  a {
    text-decoration: none;
    padding-left: 25px;

    :visited{
      color: ${colorPalette.darkBlue};
    }
  }
`

const ItemLink = styled(NavLink)`
`

const Line = styled.span`
  display: block;
  border: 1px solid ${colorPalette.white};
  width: 100%;
`
