import React from 'react'
import { shallow } from 'enzyme'
import JungleFormula from './JungleFormula'

it('renders without crashing', () => {
  expect(shallow(<JungleFormula />)).toMatchSnapshot()
})
