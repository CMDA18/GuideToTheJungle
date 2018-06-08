import React from 'react'
import { shallow } from 'enzyme'
import LogosCollection from './LogosCollection'

it('renders without crashing', () => {
  expect(shallow(<LogosCollection />)).toMatchSnapshot()
})
