import React from 'react'
import { shallow } from 'enzyme'
import Navigation from './Navigation'

it('renders without crashing', () => {
  expect(shallow(<Navigation />)).toMatchSnapshot()
})
