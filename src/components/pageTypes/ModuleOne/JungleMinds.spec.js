import React from 'react'
import { shallow } from 'enzyme'
import JungleMinds from './JungleMinds'

it('renders without crashing', () => {
  expect(shallow(<JungleMinds />)).toMatchSnapshot()
})
