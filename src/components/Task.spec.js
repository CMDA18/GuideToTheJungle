import React from 'react'
import { shallow } from 'enzyme'
import Task from './Quote'

it('renders without crashing', () => {
  expect(shallow(<Task />)).toMatchSnapshot()
})
