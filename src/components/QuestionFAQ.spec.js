import React from 'react'
import { shallow } from 'enzyme'
import QuestionFAQ from './QuestionFAQ'

it('renders without crashing', () => {
  expect(shallow(<QuestionFAQ />)).toMatchSnapshot()
})
