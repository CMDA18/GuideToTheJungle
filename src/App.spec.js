import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App, { RouteWithSubRoutes } from './App'

it('renders without crashing', () => {
  expect(toJson(shallow(<App/>))).toMatchSnapshot()
})

it('renders route', () => {
  expect(toJson(shallow(<RouteWithSubRoutes route={{path: '/', component: React.createElement('h1', { 'data-test': 'test' }, 'test')}} />))).toMatchSnapshot()
})
