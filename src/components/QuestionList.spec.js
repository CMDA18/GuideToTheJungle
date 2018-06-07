import React from 'react'
import { shallow } from 'enzyme'
import QuestionList from './QuestionList'

it('renders without crashing', () => {
  expect(shallow(<QuestionList />)).toMatchSnapshot()
})
