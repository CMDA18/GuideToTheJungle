import React from 'react'
import { shallow } from 'enzyme'
import MainContentGrid from './MainContentGrid'

it('renders without crashing', () => {
  expect(shallow(<MainContentGrid />)).toMatchSnapshot()
})
