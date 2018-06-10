// @flow
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  navigationPaths,
  navigationFAQ,
  navigationJungleMinds,
  navigationJungleCulture,
  navigationOurTeam,
  navigationHowWeWork,
  navigationOurClients
} from '../routes'
import {
  colorPalette,
  textStyles
} from '../styles/styleGuide'
import Jungle from '../shared/elements/Jungle'

type Props = {
  page: 'default' | 'faq' | 'jungleMinds' | 'jungleCulture' | 'ourTeam' | 'howWeWork' | 'ourClients'
}

const Navigation = (props: Props) => {
  switch (props.page) {
    case 'default':
    default :
      return (
        <Fragment>
          <Wrapper>
            <Logo><Jungle/></Logo>
            <List>
              { Object.keys(navigationPaths).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationPaths[path]} activeStyle={{
                    color: `${colorPalette.orange}`
                  }} title={path}>{path}</ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )

    case 'faq':
      return (
        <Fragment>
          <Wrapper>
            <Logo to='/overview'><Jungle/></Logo>
            <List>
              { Object.keys(navigationFAQ).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationFAQ[path]} activeStyle={{
                    color: `${colorPalette.orange}`
                  }} title={path}>{path}</ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )

    case 'jungleMinds':
      return (
        <Fragment>
          <Wrapper>
            <Logo to='/overview'><Jungle/></Logo>
            <List>
              { Object.keys(navigationJungleMinds).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationJungleMinds[path]} activeStyle={{
                    color: `${colorPalette.orange}`
                  }} title={path}>{path}</ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )

    case 'jungleCulture':
      return (
        <Fragment>
          <Wrapper>
            <Logo to='/overview'><Jungle/></Logo>
            <List>
              { Object.keys(navigationJungleCulture).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationJungleCulture[path]} activeStyle={{
                    color: `${colorPalette.orange}`
                  }} title={path}>{path}</ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )

    case 'ourTeam':
      return (
        <Fragment>
          <Wrapper>
            <Logo to='/overview'><Jungle/></Logo>
            <List>
              { Object.keys(navigationOurTeam).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationOurTeam[path]} activeStyle={{
                    color: `${colorPalette.orange}`
                  }} title={path}>{path}</ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )

    case 'howWeWork':
      return (
        <Fragment>
          <Wrapper>
            <Logo to='/overview'><Jungle/></Logo>
            <List>
              { Object.keys(navigationHowWeWork).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationHowWeWork[path]} activeStyle={{
                    color: `${colorPalette.orange}`
                  }} title={path}>{path}</ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )

    case 'ourClients':
      return (
        <Fragment>
          <Wrapper>
            <Logo to='/overview'><Jungle/></Logo>
            <List>
              { Object.keys(navigationOurClients).map((path, i) => (
                <Item key={i}>
                  {/* https://reacttraining.com/react-router/web/api/NavLink */}
                  <ItemLink to={navigationOurClients[path]}
                    activeStyle={{ color: `${colorPalette.orange}` }}
                    title={path}>{path}
                  </ItemLink>
                </Item>
              ))}
            </List>
          </Wrapper>
        </Fragment>
      )
  }
}

export default Navigation

const Wrapper = styled.nav`
  position: sticky;
  overflow: hidden;
  height: 100vh;
  background-color: ${colorPalette.lightBlue};
  width: 300px;
`

const Logo = styled.div`
  display: block;
  padding: 25px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80vh;
  padding: 0;

`

const Item = styled.li`
  ${textStyles.navigationItems};
  margin: 10px 0;
  
  :first-of-type {
    border-bottom: 2px solid ${colorPalette.white};
    padding: 10px 0;

    span {
      display: none;
    }
  }

  :nth-of-type(n+3) {
    margin-left: 17px;
  }

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
