import React from 'react'
import { shallow } from 'enzyme'
import OurTeam from './OurTeam'

it('renders without crashing', () => {
  expect(shallow(<OurTeam />)).toMatchSnapshot()
})
