import React from 'react'
import { shallow } from 'enzyme'
import TimeLine from './TimeLine'

it('renders without crashing', () => {
  expect(shallow(<TimeLine />)).toMatchSnapshot()
})
