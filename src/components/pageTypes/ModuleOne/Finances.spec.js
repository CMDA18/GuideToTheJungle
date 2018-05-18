import React from 'react'
import { shallow } from 'enzyme'
import Finances from './Finances'

it('renders without crashing', () => {
  expect(shallow(<Finances />)).toMatchSnapshot()
})
