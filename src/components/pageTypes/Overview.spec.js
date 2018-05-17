import React from 'react'
import { shallow } from 'enzyme'
import Overview from './Overview'

it('renders without crashing', () => {
  expect(shallow(<Overview />)).toMatchSnapshot()
})
