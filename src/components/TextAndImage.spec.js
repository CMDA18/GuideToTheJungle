import React from 'react'
import { shallow } from 'enzyme'
import TextAndImage from './TextAndImage'

it('renders without crashing', () => {
  expect(shallow(<TextAndImage />)).toMatchSnapshot()
})
