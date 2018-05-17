import React from 'react'
import { shallow } from 'enzyme'
import HowWeWork from './HowWeWork'

it('renders without crashing', () => {
  expect(shallow(<HowWeWork />)).toMatchSnapshot()
})
