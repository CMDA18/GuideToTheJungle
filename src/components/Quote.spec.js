import React from 'react'
import { shallow } from 'enzyme'
import Quote from './Quote'

it('renders without crashing', () => {
  expect(shallow(<Quote />)).toMatchSnapshot()
})
