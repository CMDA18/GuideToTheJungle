import React from 'react'
import { shallow } from 'enzyme'
import TasksWeekTwo from './TasksWeekTwo'

it('renders without crashing', () => {
  expect(shallow(<TasksWeekTwo />)).toMatchSnapshot()
})
