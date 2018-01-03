// @flow
import { preloadActionType, testActionType, type TestAction, type PreloadAction } from '../actions/settings'

// Flow Types
export type State = {
  test?: string,
  newTest?: string,
  preload?: string
}
export type Action = TestAction | PreloadAction

// Initial Reducer State when none provided
const initialState: State = { test: 'hoi' }

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case preloadActionType: {
      return {
        ...state,
        preload: `pre:${action.value}`
      }
    }
    case `${preloadActionType}_SUCCESS`: {
      return {
        ...state,
        preload: `pre:done:${action.value}`
      }
    }
    case testActionType: {
      return {
        ...state,
        newTest: `sync:${action.value}`
      }
    }
    case `${testActionType}_SUCCESS`: {
      return {
        ...state,
        newTest: action.value
      }
    }
    default: {
      return state
    }
  }
}
