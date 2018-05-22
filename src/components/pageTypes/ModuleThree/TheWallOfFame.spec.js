import React from 'react'
import { shallow } from 'enzyme'
import TheWallOfFame from './TheWallOfFame'

it('renders without crashing', () => {
  expect(shallow(<TheWallOfFame />)).toMatchSnapshot()
})
