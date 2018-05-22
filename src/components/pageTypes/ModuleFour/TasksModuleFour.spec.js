import React from 'react'
import { shallow } from 'enzyme'
import TasksModuleFour from './TasksModuleFour'

it('renders without crashing', () => {
  expect(shallow(<TasksModuleFour />)).toMatchSnapshot()
})
