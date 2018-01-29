import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import { history } from 'history/createBrowserHistory'

import reducers from './reducers'
import sagas from './sagas'

/* Keep track of the last action for server side rendering */
export const actions = (state = {}, action) => {
  return {
    last: action.type
  }
}

/* istanbul ignore next */
const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

// CreateStore
export default (initialState) => {
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
