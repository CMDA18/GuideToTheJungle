// @flow

import React, { type ComponentType } from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router'

import { isClient } from './lib/side'
import routes, { type Route as RouteObjectType } from './routes'
import './styles/index'

const COMMIT_HASH = process.env.COMMIT_HASH || 'N.A.'

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test' && isClient) {
  console.info(`
  V:${COMMIT_HASH}

  `)
}

export const RouteWithSubRoutes = (route: RouteObjectType) => {
  return (
    <Route
      path={route.path}
      render={props => {
        /* istanbul ignore next */
        if (route.status && props.staticContext) {
          props.staticContext.status = route.status
        }
        /* istanbul ignore next */
        return <route.component {...props} />
      }}
    />
  )
}

const App: ComponentType<*> = () => (
  <div>
    <Helmet titleTemplate="%s - Basic Project" title="Shop" />
    <Switch>
      {routes.map((route, i) => {
        // only pass allowed route props to Route component
        const { preload, ...routeProps } = route
        return <RouteWithSubRoutes key={i} {...routeProps} />
      })}
    </Switch>
  </div>
)

export default App
