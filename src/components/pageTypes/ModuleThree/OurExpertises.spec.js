import React from 'react'
import { shallow } from 'enzyme'
import OurExpertises from './OurExpertises'

it('renders without crashing', () => {
  expect(shallow(<OurExpertises />)).toMatchSnapshot()
})
