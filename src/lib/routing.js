// @flow
import React from 'react'
import { Route, Redirect } from 'react-router'

type RedirectType = {
  to: string,
  from?: string,
  status?: number
}

export const RedirectWithStatus = ({ from, to, status }: RedirectType) => (
  <Route render={({ staticContext }: any) => { // eslint-disable-line flowtype/no-weak-types
    // there is no `staticContext` on the client, so
    // we need to guard against that here
    /* istanbul ignore next */
    if (staticContext) {
      staticContext.status = status
    }
    /* istanbul ignore next */
    return <Redirect from={from} to={to}/>
  }}/>
)
