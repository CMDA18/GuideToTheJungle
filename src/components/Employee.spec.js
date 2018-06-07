import React from 'react'
import { shallow } from 'enzyme'
import Employee from './Employee'

it('renders without crashing', () => {
  expect(shallow(<Employee />)).toMatchSnapshot()
})
