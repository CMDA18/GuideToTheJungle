import React from 'react'
import { shallow } from 'enzyme'
import InsideTheJungle from './InsideTheJungle'

it('renders without crashing', () => {
  expect(shallow(<InsideTheJungle />)).toMatchSnapshot()
})
