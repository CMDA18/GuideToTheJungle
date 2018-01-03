import { call } from 'redux-saga/effects'

import { createTestAction } from '../actions/settings'
import sagas, { asyncCallExample, getAsyncContent } from './index'

describe('async loading example', () => {
  expect.assertions(1)
  const data = getAsyncContent('tralalala')
  expect(data).resolves.toEqual('asyncFromSaga:tralalala')
})

describe('Sagas', () => {
  it('exports all sagas', () => {
    expect(sagas()).toMatchSnapshot()
  })

  it('complete an async action', () => {
    const gen = asyncCallExample(createTestAction('hoi'))

    expect(gen.next().value).toEqual(
      call(getAsyncContent, 'hoi')
    )
  })
})
