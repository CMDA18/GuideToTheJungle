import React from 'react'
import { shallow } from 'enzyme'
import OurMethode from './OurMethode'

it('renders without crashing', () => {
  expect(shallow(<OurMethode />)).toMatchSnapshot()
})
