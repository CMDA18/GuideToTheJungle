import React from 'react'
import { shallow } from 'enzyme'
import OurClients from './OurClients'

it('renders without crashing', () => {
  expect(shallow(<OurClients />)).toMatchSnapshot()
})
