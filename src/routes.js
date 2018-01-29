// @flow
import { type ComponentType } from 'react'

import HomePage from './components/pageTypes/Home'
import RedirectToHomePage from './components/pageTypes/RedirectToHome'
import ErrorPage from './components/pageTypes/Error'

import {
  createPreloadAction,
  type PreloadAction
} from './redux/actions/settings'

type Paths = {
  [key: string]: string
}

export type Preload = {
  dispatch: PreloadAction,
  completeActionType: string
}

export type Route = {
  path: string,
  title: string,
  component: ComponentType<any>,
  exact?: boolean,
  status?: number,
  staticContext?: any,
  preload?: Preload
}

export const paths: Paths = {
  home: '/',
  redirect: '/redirectToHome',
  pageNotFound: '*'
}

const routes: Array<Route> = [
  {
    path: paths.home,
    title: 'Homepage',
    component: HomePage,
    preload: {
      dispatch: createPreloadAction('Preload this'),
      completeActionType: `${createPreloadAction('Preload this').type}_SUCCESS`
    },
    exact: true
  },
  {
    path: paths.redirect,
    title: 'redirect to home',
    component: RedirectToHomePage,
    exact: true
  },
  {
    path: paths.pageNotFound,
    title: 'Page Not Found',
    component: ErrorPage,
    status: 404
  }
]

export const shouldPreload = (route: Route): boolean => !!(
  route &&
  route.preload &&
  route.preload.dispatch &&
  route.preload.completeActionType
)

export default routes
