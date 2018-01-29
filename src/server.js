'use-strict'

import fs from 'fs'
import express from 'express'
import expressStaticGzip from 'express-static-gzip'
import morgan from 'morgan'
import helmet from 'helmet'
import clfDate from 'clf-date'
import path from 'path'

// Server side rendering modules
import React from 'react'
import { StaticRouter, matchPath } from 'react-router'
import ReactHelmet from 'react-helmet'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

// App
import createStore from './redux/store'
import App from './App'
import routes, { shouldPreload } from './routes'

// env settings
const PORT = process.env.PORT || 9000
const PUBLIC_URL = process.env.PUBLIC_URL || ''
const TIMEOUT = process.env.TIMEOUT || 1000
const COMMIT_HASH = process.env.COMMIT_HASH || 'N.A.'

// Get Bundle path
const getBundlePath = type => {
  const fileName = fs
    .readdirSync(path.resolve(__dirname, '..', 'build', 'static', type))
    .find(
      fileName =>
        fileName.indexOf('main') === 0 &&
        fileName.indexOf('.' + type) === fileName.length - (type.length + 1)
    )

  return '/static/' + type + '/' + fileName
}

// Handle Error
const onError = (req, res, exception) => {
  res.status(500) // a nice error page would be great.
  res.end()

  console.error('Error Encountered', exception)
}

// Init Server
const server = express()

// use ejs template engine to render the html outside of the react root
server.set('views', path.resolve(__dirname, '..', 'src', 'serverTemplates'))
server.set('view engine', 'ejs')

// Setup security patches
server.use(helmet())

// Setup logger
server.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
)

// Serve static assets
server.use(expressStaticGzip(path.resolve(__dirname, '..', 'build'), {
  indexFromEmptyFile: false
}))

const fetchRouteData = (route, store) => {
  if (shouldPreload(route)) {
    console.info(`[${clfDate()}] Preloading state for "${route.path}"`)

    return new Promise((resolve, reject) => {
      // set a timeout to force a render en deffer loading to front-end if it takes to long.
      const rejectAfterTime = setTimeout(() => {
        reject(
          new Error(`Async load is taking longer than ${TIMEOUT}ms, forcing render for "${route.path}"`)
        )
      }, TIMEOUT)

      // subscribe for preload complete action
      store.subscribe(() => {
        const state = store.getState()

        if (state.actions.last === route.preload.completeActionType) {
          clearTimeout(rejectAfterTime)
          resolve(store)
        }
      })

      // dispatch preload action
      store.dispatch(route.preload.dispatch)
    })
  } else {
    return Promise.resolve(store)
  }
}

const renderPage = (req, res, store) => {
  try {
    const context = {}

    // Setup serverside rendering styled-components
    const sheet = new ServerStyleSheet()

    // Build the React App
    const body = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <StyleSheetManager sheet={sheet.instance}>
            <App />
          </StyleSheetManager>
        </StaticRouter>
      </Provider>
    )

    const styling = sheet.getStyleTags()

    // Router adds a redirect url to context when a <Redirect> component gets rendered. On client side the router will
    // update the browser history state, on the server we need to send a proper redirect.
    if (context.url) {
      res.redirect(context.status || 301, context.url)
      return
    }

    // Get the head info like meta tags and title
    const head = ReactHelmet.renderStatic()

    // Render the template with the application
    res.render('index', {
      head,
      styling,
      body,
      state: JSON.stringify(store.getState()),
      baseUrl: PUBLIC_URL,
      jsBundleUrl: getBundlePath('js')
    })
    res.end()
  } catch (e) {
    onError(req, res, e)
  }
}

// Setup the inital store
const initStore = (url) => {
  // Setup the inital state
  const state = {
    routing: {
      location: {
        pathname: url.split('?')[0],
        search: url.includes('?') ? `?${url.split('?')[1]}` : '',
        hash: ''
      }
    }
  }

  return createStore(state)
}

// Always return the main index.html, so react-router render the route in the client
server.get('*', (req, res) => {
  // look for the matching route
  const route = routes.find(route => matchPath(req.url, route))
  const initialStore = initStore(req.url)

  fetchRouteData(route, initialStore)
    .then(store => {
      renderPage(req, res, store)
    })
    .catch(e => {
      console.error(`[${clfDate()}]`, e)
      renderPage(req, res, initialStore)
    })
})

// For anything else (such as post requests, which we don't support) just send a 500
server.use(function (err, req, res, next) {
  onError(req, res, err)
})

server.listen(PORT, () => {
  console.info(`[${clfDate()}] Server version ${COMMIT_HASH} running on port ${PORT}`)
})
