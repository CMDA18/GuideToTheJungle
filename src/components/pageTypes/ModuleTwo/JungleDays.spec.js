import React from 'react'
import { shallow } from 'enzyme'
import JungleDays from './JungleDays'

it('renders without crashing', () => {
  expect(shallow(<JungleDays />)).toMatchSnapshot()
})
