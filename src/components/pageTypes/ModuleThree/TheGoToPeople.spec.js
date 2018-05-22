import React from 'react'
import { shallow } from 'enzyme'
import TheGoToPeople from './TheGoToPeople'

it('renders without crashing', () => {
  expect(shallow(<TheGoToPeople />)).toMatchSnapshot()
})
