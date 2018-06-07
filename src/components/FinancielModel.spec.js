import React from 'react'
import { shallow } from 'enzyme'
import FinancielModel from './FinancielModel'

it('renders without crashing', () => {
  expect(shallow(<FinancielModel />)).toMatchSnapshot()
})
