import React from 'react'
import { shallow } from 'enzyme'
import Clients from './Clients'

it('renders without crashing', () => {
  expect(shallow(<Clients />)).toMatchSnapshot()
})
