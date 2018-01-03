// @flow

import { createStore, applyMiddleware, combineReducers, compose, type Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import { type History } from 'history/createBrowserHistory'

import reducers, { type AppState } from './reducers'
import sagas from './sagas'

/* Keep track of the last action for server side rendering */
export const actions = (state: {last?: string} = {}, action: {type: string}) => {
  return {
    last: action.type
  }
}

/* istanbul ignore next */
const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

// CreateStore
export default (initialState?: AppState, history: History): Store<*, *> => {
  const store = createStore(
    combineReducers({
      ...reducers,
      actions,
      routing
    }),
    initialState,
    composeEnhancer(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(sagaMiddleware)
    )
  )

  // Run the sagas
  sagaMiddleware.run(sagas)

  return store
}
