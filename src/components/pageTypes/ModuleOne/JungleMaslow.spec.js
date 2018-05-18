import React from 'react'
import { shallow } from 'enzyme'
import JungleMaslow from './JungleMaslow'

it('renders without crashing', () => {
  expect(shallow(<JungleMaslow />)).toMatchSnapshot()
})
