import React from 'react'
import { shallow } from 'enzyme'
import TasksModuleThree from './TasksModuleThree'

it('renders without crashing', () => {
  expect(shallow(<TasksModuleThree />)).toMatchSnapshot()
})
