import React from 'react'
import { shallow } from 'enzyme'
import OverviewCardCollection from './OverviewCardCollection'

it('renders without crashing', () => {
  expect(shallow(<OverviewCardCollection />)).toMatchSnapshot()
})
