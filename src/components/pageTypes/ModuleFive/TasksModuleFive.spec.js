import React from 'react'
import { shallow } from 'enzyme'
import TasksModuleFive from './TasksModuleFive'

it('renders without crashing', () => {
  expect(shallow(<TasksModuleFive />)).toMatchSnapshot()
})
