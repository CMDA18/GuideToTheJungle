import React from 'react'
import { shallow } from 'enzyme'
import EmployeeCollection from './EmployeeCollection'

it('renders without crashing', () => {
  expect(shallow(<EmployeeCollection />)).toMatchSnapshot()
})
