import React from 'react'
import { shallow } from 'enzyme'
import OurPeople from './OurPeople'

it('renders without crashing', () => {
  expect(shallow(<OurPeople />)).toMatchSnapshot()
})
