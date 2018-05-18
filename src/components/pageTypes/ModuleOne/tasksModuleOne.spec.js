import React from 'react'
import { shallow } from 'enzyme'
import TasksModuleOne from './TasksModuleOne'

it('renders without crashing', () => {
  expect(shallow(<TasksModuleOne />)).toMatchSnapshot()
})
