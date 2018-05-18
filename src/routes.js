// @flow
import { type ComponentType } from 'react'

import HomePage from './components/pageTypes/Home'
import RedirectToHomePage from './components/pageTypes/RedirectToHome'
import ErrorPage from './components/pageTypes/Error'
import Overview from './components/pageTypes/Overview'
import JungleMinds from './components/pageTypes/JungleMinds'
import JungleCulture from './components/pageTypes/JungleCulture'
import OurPeople from './components/pageTypes/OurPeople'
import HowWeWork from './components/pageTypes/HowWeWork'
import OurClients from './components/pageTypes/OurClients'
import FAQ from './components/pageTypes/FAQ'

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

export type StaticContext = {
  status?: number
}

export type Route = {
  path: string,
  title: string,
  component: ComponentType<*>,
  exact?: boolean,
  status?: number,
  staticContext?: StaticContext,
  preload?: Preload
}

export const paths: Paths = {
  home: '/',
  redirect: '/redirectToHome',
  overview: '/overview',
  jungleMinds: '/jungleMinds',
  jungleCulture: '/jungleCulture',
  ourPeople: '/ourPeople',
  howWeWork: '/howWeWork',
  ourClients: '/ourClients',
  faq: '/faq',
  pageNotFound: '*'
}

export const navigationPaths: Paths = {
  Overview: '/overview',
  '0.0 FAQ': '/faq',
  '0.1 Jungle Minds': '/jungleMinds',
  '0.2 The Jungle Culture': '/jungleCulture',
  '0.3 Our People': '/ourPeople',
  '0.4 How We Work': '/howWeWork',
  '0.5 Our Clients': '/ourClients'
}

export const navigationFAQ: Paths = {
  Overview: '/overview',
  'FAQ': '/faq'
}

export const navigationJungleMinds: Paths = {
  Overview: '/overview',
  '1 Jungle Minds': '/jungleMinds',
  '1.1 Ons verhaal': '/#',
  '1.2 Jungle Maslow': '/#',
  '1.3 Financiën': '/#',
  '1.4 Weekelijkse taken': '/#'
}

export const navigationJungleCulture: Paths = {
  Overview: '/overview',
  '2 De Jungle Cultuur': '/jungleCulture',
  '2.1 Jungle Formula': '/#',
  '2.2 Jungle Days': '/#',
  '2.3 .': '/#',
  '2.4 Weekelijkse taken': '/#'

}

export const navigationOurTeam: Paths = {
  Overview: '/overview',
  '3 Ons Team': '/ourPeople',
  '3.1 Onze expertises': '/#',
  '3.2 De Wall of fame': '/#',
  '3.3 De go to mensen': '/#',
  '3.4 Weekelijkse taken': '/#'
}

export const navigationHowWeWork: Paths = {
  Overview: '/overview',
  '4 Ons Workflow': '/howWeWork',
  '4.1 Concept': '/#',
  '4.2 Product markt fit': '/#',
  '4.3 Groei': '/#',
  '4.4 Weekelijkse taken': '/#'
}

export const navigationOurClients: Paths = {
  Overview: '/overview',
  '5 Ons Klanten': '/ourClients',
  '5.1 Klanten': '/#',
  '5.2 Portfolio': '/#',
  '5.3 .': '/#',
  '5.4 Weekelijkse taken': '/#'
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
    path: paths.overview,
    title: 'Overview',
    component: Overview,
    exact: true
  },
  {
    path: paths.faq,
    title: '0.0 FAQ',
    component: FAQ,
    exact: true
  },
  {
    path: paths.jungleMinds,
    title: '0.1 Jungle Minds',
    component: JungleMinds,
    exact: true
  },
  {
    path: paths.jungleCulture,
    title: '0.2 The Jungle Culture',
    component: JungleCulture,
    exact: true
  },
  {
    path: paths.ourPeople,
    title: '0.3 Our People',
    component: OurPeople,
    exact: true
  },
  {
    path: paths.howWeWork,
    title: '0.4 How We Work',
    component: HowWeWork,
    exact: true
  },
  {
    path: paths.ourClients,
    title: '0.5 Our Clients',
    component: OurClients,
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
