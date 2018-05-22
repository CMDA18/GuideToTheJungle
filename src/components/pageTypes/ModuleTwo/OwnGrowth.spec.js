import React from 'react'
import { shallow } from 'enzyme'
import OwnGrowth from './OwnGrowth'

it('renders without crashing', () => {
  expect(shallow(<OwnGrowth />)).toMatchSnapshot()
})
