import React from 'react'
import { RedirectWithStatus } from './routing'

it('renders without crashing', () => {
  expect(<RedirectWithStatus status={302} to={'/'} />).toMatchSnapshot()

  expect(RedirectWithStatus({
    from: '/',
    to: '/somewhere',
    status: 302
  })).toMatchSnapshot()
})
