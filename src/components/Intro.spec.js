import React from 'react'
import { shallow } from 'enzyme'
import Intro from './Intro'

it('renders without crashing', () => {
  expect(shallow(<Intro />)).toMatchSnapshot()
})
