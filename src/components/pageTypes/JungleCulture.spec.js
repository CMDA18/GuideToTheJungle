import React from 'react'
import { shallow } from 'enzyme'
import JungleCulture from './JungleCulture'

it('renders without crashing', () => {
  expect(shallow(<JungleCulture />)).toMatchSnapshot()
})
