// @flow
import { type ComponentType } from 'react'

import HomePage from './components/pageTypes/Home'
import RedirectToHomePage from './components/pageTypes/RedirectToHome'
import ErrorPage from './components/pageTypes/Error'
import Overview from './components/pageTypes/Overview'
import JungleCulture from './components/pageTypes/JungleCulture'
import OurPeople from './components/pageTypes/OurPeople'
import HowWeWork from './components/pageTypes/HowWeWork'
import OurClients from './components/pageTypes/OurClients'
import FAQ from './components/pageTypes/FAQ'

import {
  createPreloadAction,
  type PreloadAction
} from './redux/actions/settings'
// Module 1
import JungleMinds from './components/pageTypes/ModuleOne/JungleMinds'
import OurStory from './components/pageTypes/ModuleOne/OurStory'
import JungleMaslow from './components/pageTypes/ModuleOne/JungleMaslow'
import Finances from './components/pageTypes/ModuleOne/Finances'
import TasksModuleOne from './components/pageTypes/ModuleOne/TasksModuleOne'

// Module 2
import JungleFormula from './components/pageTypes/ModuleTwo/JungleFormula'
import JungleDays from './components/pageTypes/ModuleTwo/JungleDays'
import TasksWeekTwo from './components/pageTypes/ModuleTwo/TasksWeekTwo'
import OwnGrowth from './components/pageTypes/ModuleTwo/OwnGrowth'

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
  pageNotFound: '*',
  overview: '/overview',
  faq: '/faq',
  // Module 1
  jungleMinds: '/jungleMinds',
  // Moduke 2
  jungleCulture: '/jungleCulture',
  jungleFormula: '/jungleFormula',
  jungleDays: '/jungleDays',
  ownGrowth: '/ownGrowth',
  tasksWeekTwo: '/tasksWeekTwo',
  // Module 3
  ourPeople: '/ourPeople',
  // Module 4
  howWeWork: '/howWeWork',
  // Module 5
  ourClients: '/ourClients'
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

// FAQ
export const navigationFAQ: Paths = {
  Overview: '/overview',
  'FAQ': '/faq'
}

// Module 1
export const navigationJungleMinds: Paths = {
  Overview: '/overview',
  '1 Jungle Minds': '/jungleMinds',
  '1.1 Ons verhaal': '/ourStory',
  '1.2 Jungle Maslow': '/jungleMaslow',
  '1.3 Financiën': '/finances',
  '1.4 Opdrachten': '/tasksModuleOne'
}

// Module 2
export const navigationJungleCulture: Paths = {
  Overview: '/overview',
  '2 De Jungle Cultuur': '/jungleCulture',
  '2.1 Jungle Formula': '/jungleFormula',
  '2.2 Jungle Days': '/jungleDays',
  '2.3 Ontwikkeling': '/ownGrowth',
  '2.4 Opdrachten': '/tasksWeekTwo'

}

// Module 3
export const navigationOurTeam: Paths = {
  Overview: '/overview',
  '3 Ons Team': '/ourPeople',
  '3.1 Onze expertises': '/#',
  '3.2 De Wall of fame': '/#',
  '3.3 De go to mensen': '/#',
  '3.4 Opdrachten': '/#'
}

// Module 4
export const navigationHowWeWork: Paths = {
  Overview: '/overview',
  '4 Ons Workflow': '/howWeWork',
  '4.1 Concept': '/#',
  '4.2 Product markt fit': '/#',
  '4.3 Groei': '/#',
  '4.4 Opdrachten': '/#'
}

// Module 5
export const navigationOurClients: Paths = {
  Overview: '/overview',
  '5 Ons Klanten': '/ourClients',
  '5.1 Klanten': '/#',
  '5.2 Portfolio': '/#',
  '5.3 .': '/#',
  '5.4 Opdrachten': '/#'
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
    title: 'FAQ',
    component: FAQ,
    exact: true
  },
  // Module 1
  {
    path: paths.jungleMinds,
    title: '1 Jungle Minds',
    component: JungleMinds,
    exact: true
  },
  {
    path: paths.ourStory,
    title: 'Our Story',
    component: OurStory,
    exact: true
  },
  {
    path: paths.jungleMaslow,
    title: 'Jungle Maslow',
    component: JungleMaslow,
    exact: true
  },
  {
    path: paths.finances,
    title: 'Finances',
    component: Finances,
    exact: true
  },
  {
    path: paths.tasksModuleOne,
    title: 'Tasks Module One',
    component: TasksModuleOne,
    exact: true
  },
  // Module 2
  {
    path: paths.jungleCulture,
    title: '2 The Jungle Culture',
    component: JungleCulture,
    exact: true
  },
  {
    path: paths.jungleFormula,
    title: '2.1 Jungle Formula',
    component: JungleFormula,
    exact: true
  },
  {
    path: paths.jungleDays,
    title: '2.2 Jungle Days',
    component: JungleDays,
    exact: true
  },
  {
    path: paths.ownGrowth,
    title: '2.3 Ontwikkeling',
    component: OwnGrowth,
    exact: true
  },
  {
    path: paths.tasksWeekTwo,
    title: '2.4 Opdrachten',
    component: TasksWeekTwo,
    exact: true
  },
  // Module 3
  {
    path: paths.ourPeople,
    title: '3 Our People',
    component: OurPeople,
    exact: true
  },
  // Module 4
  {
    path: paths.howWeWork,
    title: '4 How We Work',
    component: HowWeWork,
    exact: true
  },
  // Module 5
  {
    path: paths.ourClients,
    title: 'Our Clients',
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
