import React from 'react'
import { shallow } from 'enzyme'
import Grid from './Grid'

it('renders without crashing', () => {
  expect(shallow(<Grid />)).toMatchSnapshot()
})
