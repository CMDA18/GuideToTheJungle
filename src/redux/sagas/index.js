import { call, put, takeLatest } from 'redux-saga/effects'

import { testActionType, preloadActionType } from '../actions/settings'

export const getAsyncContent = (target) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`asyncFromSaga:${target}`)
    }, 200)
  })
}

export function * asyncCallExample (action) {
  try {
    const user = yield call(getAsyncContent, action.value)
    yield put({type: `${action.type}_SUCCESS`, value: user})
  } catch (e) {
    yield put({type: `${action.type}_FAILED`, value: e.message})
  }
}

function * sagas () {
  yield takeLatest(testActionType, asyncCallExample)
  yield takeLatest(preloadActionType, asyncCallExample)
}

export default sagas
