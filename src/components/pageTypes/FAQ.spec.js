import React from 'react'
import { shallow } from 'enzyme'
import FAQ from './FAQ'

it('renders without crashing', () => {
  expect(shallow(<FAQ />)).toMatchSnapshot()
})
