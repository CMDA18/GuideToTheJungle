import React from 'react'
import { shallow } from 'enzyme'
import OverviewCard from './OverviewCard'

it('renders without crashing', () => {
  expect(shallow(<OverviewCard />)).toMatchSnapshot()
})
