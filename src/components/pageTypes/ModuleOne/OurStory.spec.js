import React from 'react'
import { shallow } from 'enzyme'
import OurStory from './OurStory'

it('renders without crashing', () => {
  expect(shallow(<OurStory />)).toMatchSnapshot()
})
