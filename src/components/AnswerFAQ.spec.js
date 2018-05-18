import React from 'react'
import { shallow } from 'enzyme'
import AnswerFAQ from './AnswerFAQ'

it('renders without crashing', () => {
  expect(shallow(<AnswerFAQ />)).toMatchSnapshot()
})
