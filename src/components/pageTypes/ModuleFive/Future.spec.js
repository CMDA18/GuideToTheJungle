import React from 'react'
import { shallow } from 'enzyme'
import Future from './Future'

it('renders without crashing', () => {
  expect(shallow(<Future />)).toMatchSnapshot()
})
