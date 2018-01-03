import React from 'react'
import { shallow } from 'enzyme'
import RedirectToHome from './RedirectToHome'

it('renders without crashing', () => {
  expect(shallow(<RedirectToHome />)).toMatchSnapshot()
})
