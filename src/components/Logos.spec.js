import React from 'react'
import { shallow } from 'enzyme'
import Logos from './Logos'

it('renders without crashing', () => {
  expect(shallow(<Logos />)).toMatchSnapshot()
})
