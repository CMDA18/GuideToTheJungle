import React from 'react'
import { shallow } from 'enzyme'
import Portfolio from './Portfolio'

it('renders without crashing', () => {
  expect(shallow(<Portfolio />)).toMatchSnapshot()
})
