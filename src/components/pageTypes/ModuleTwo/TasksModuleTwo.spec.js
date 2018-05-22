import React from 'react'
import { shallow } from 'enzyme'
import TasksModuleTwo from './TasksModuleTwo'

it('renders without crashing', () => {
  expect(shallow(<TasksModuleTwo />)).toMatchSnapshot()
})
