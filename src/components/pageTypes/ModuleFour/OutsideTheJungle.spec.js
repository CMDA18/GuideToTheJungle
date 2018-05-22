import React from 'react'
import { shallow } from 'enzyme'
import OutsideTheJungle from './OutsideTheJungle'

it('renders without crashing', () => {
  expect(shallow(<OutsideTheJungle />)).toMatchSnapshot()
})
