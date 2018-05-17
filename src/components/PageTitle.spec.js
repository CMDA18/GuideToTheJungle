import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from './PageTitle'

it('renders without crashing', () => {
  expect(shallow(<PageTitle />)).toMatchSnapshot()
})
