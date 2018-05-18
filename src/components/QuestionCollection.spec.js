import React from 'react'
import { shallow } from 'enzyme'
import QuestionCollection from './QuestionCollection'

it('renders without crashing', () => {
  expect(shallow(<QuestionCollection />)).toMatchSnapshot()
})
