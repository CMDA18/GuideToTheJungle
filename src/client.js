import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { isClient } from './lib/side'
import createStore from './redux/store'
import App from './App'

const history = isClient ? createHistory() : null
let store

if (window.__PRELOADED_STATE__) {
  store = createStore(window.__PRELOADED_STATE__, history)
  delete (window.__PRELOADED_STATE__)
} else {
  store = createStore()
}

// test action dispatch
store.dispatch({
  type: 'TEST',
  value: 'halloooo'
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('application')
)

