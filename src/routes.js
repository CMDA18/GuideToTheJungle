// @flow
import { type ComponentType } from 'react'

import HomePage from './components/pageTypes/Home'
import RedirectToHomePage from './components/pageTypes/RedirectToHome'
import ErrorPage from './components/pageTypes/Error'
import Overview from './components/pageTypes/Overview'
import OverviewTwo from './components/pageTypes/OverviewTwo'
import OverviewThree from './components/pageTypes/OverviewThree'
import OverviewFour from './components/pageTypes/OverviewFour'
import OverviewFive from './components/pageTypes/OverviewFive'
import JungleCulture from './components/pageTypes/JungleCulture'
import OurPeople from './components/pageTypes/OurPeople'
import HowWeWork from './components/pageTypes/HowWeWork'
import OurClients from './components/pageTypes/OurClients'
import FAQ from './components/pageTypes/FAQ'

// Module 1
import JungleMinds from './components/pageTypes/ModuleOne/JungleMinds'
import OurStory from './components/pageTypes/ModuleOne/OurStory'
import JungleMaslow from './components/pageTypes/ModuleOne/JungleMaslow'
import Finances from './components/pageTypes/ModuleOne/Finances'
import TasksModuleOne from './components/pageTypes/ModuleOne/TasksModuleOne'

// Module 2
import JungleFormula from './components/pageTypes/ModuleTwo/JungleFormula'
import JungleDays from './components/pageTypes/ModuleTwo/JungleDays'
import TasksModuleTwo from './components/pageTypes/ModuleTwo/TasksModuleTwo'
import OwnGrowth from './components/pageTypes/ModuleTwo/OwnGrowth'

import {
  createPreloadAction,
  type PreloadAction
} from './redux/actions/settings'
import OurTeam from './components/pageTypes/ModuleThree/OurTeam'
import TheWallOfFame from './components/pageTypes/ModuleThree/TheWallOfFame'
import TasksModuleThree from './components/pageTypes/ModuleThree/TasksModuleThree'
import TheGoToPeople from './components/pageTypes/ModuleThree/TheGoToPeople'
import OurMethode from './components/pageTypes/ModuleFour/OurMethode'
import InsideTheJungle from './components/pageTypes/ModuleFour/InsideTheJungle'
import OutsideTheJungle from './components/pageTypes/ModuleFour/OutsideTheJungle'
import TasksModuleFour from './components/pageTypes/ModuleFour/TasksModuleFour'
import Clients from './components/pageTypes/ModuleFive/Clients'
import Portfolio from './components/pageTypes/ModuleFive/Portfolio'
import Future from './components/pageTypes/ModuleFive/Future'
import TasksModuleFive from './components/pageTypes/ModuleFive/TasksModuleFive'
import Introduction from './components/pageTypes/Introduction'
import End from './components/pageTypes/End'

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
  overviewTwo: '/overviewTwo',
  overviewThree: '/overviewThree',
  overviewFour: '/overviewFour',
  overviewFive: '/overviewFive',
  faq: '/faq',
  introduction: '/introduction',
  end: '/end',
  // Module 1
  jungleMinds: '/jungleMinds',
  ourStory: '/ourStory',
  jungleMaslow: '/jungleMaslow',
  finances: '/finances',
  tasksModuleOne: '/tasksModuleOne',
  // Moduke 2
  jungleCulture: '/jungleCulture',
  jungleFormula: '/jungleFormula',
  jungleDays: '/jungleDays',
  ownGrowth: '/ownGrowth',
  tasksModuleTwo: '/tasksModuleTwo',
  // Module 3
  ourPeople: '/ourPeople',
  ourTeam: '/ourTeam',
  theWallOfFame: '/theWallOfFame',
  theGoToPeople: '/theGoToPeople',
  tasksModuleThree: '/tasksModuleThree',
  // Module 4
  howWeWork: '/howWeWork',
  ourMethode: '/ourMethode',
  insideTheJungle: '/insideTheJungle',
  outsideTheJungle: '/outsideTheJungle',
  tasksModuleFour: '/tasksModuleFour',
  // Module 5
  ourClients: '/ourClients',
  clients: '/clients',
  portfolio: '/portfolio',
  future: '/future',
  tasksModuleFive: '/tasksModuleFive'
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
  '1.3 Financiële Model': '/finances',
  '1.4 Opdrachten': '/tasksModuleOne'
}

// Module 2
export const navigationJungleCulture: Paths = {
  Overview: '/overviewTwo',
  '2 De Jungle Cultuur': '/jungleCulture',
  '2.1 Jungle Formula': '/jungleFormula',
  '2.2 Jungle Days': '/jungleDays',
  '2.3 Ontwikkeling': '/ownGrowth',
  '2.4 Opdrachten': '/tasksModuleTwo'

}

// Module 3
export const navigationOurTeam: Paths = {
  Overview: '/overviewThree',
  '3 Ons Team': '/ourPeople',
  '3.1 Jungle Familie': '/ourTeam',
  '3.2 De Wall of Fame': '/theWallOfFame',
  '3.3 De Go To People': '/theGoToPeople',
  '3.4 Opdrachten': '/tasksModuleThree'
}

// Module 4
export const navigationHowWeWork: Paths = {
  Overview: '/overviewFour',
  '4 Ons Workflow': '/howWeWork',
  '4.1 Onze methode': '/ourMethode',
  '4.2 Binnen de Jungle': '/insideTheJungle',
  '4.3 Buiten de Jungle': '/outsideTheJungle',
  '4.4 Opdrachten': '/tasksModuleFour'
}

// Module 5
export const navigationOurClients: Paths = {
  Overview: '/overviewFive',
  '5 Ons Klanten': '/ourClients',
  '5.1 Klanten': '/clients',
  '5.2 Portfolio': '/portfolio',
  '5.3 Toekomst': '/future',
  '5.4 Opdrachten': '/tasksModuleFive'
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
    path: paths.overviewTwo,
    title: 'OverviewTwo',
    component: OverviewTwo,
    exact: true
  },
  {
    path: paths.overviewThree,
    title: 'OverviewThree',
    component: OverviewThree,
    exact: true
  },
  {
    path: paths.overviewFour,
    title: 'OverviewFour',
    component: OverviewFour,
    exact: true
  },
  {
    path: paths.overviewFive,
    title: 'OverviewFive',
    component: OverviewFive,
    exact: true
  },
  {
    path: paths.faq,
    title: 'FAQ',
    component: FAQ,
    exact: true
  },
  {
    path: paths.introduction,
    title: 'introduction',
    component: Introduction,
    exact: true
  },
  {
    path: paths.end,
    title: 'End',
    component: End,
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
    path: paths.tasksModuleTwo,
    title: '2.4 Opdrachten',
    component: TasksModuleTwo,
    exact: true
  },
  // Module 3
  {
    path: paths.ourPeople,
    title: '3 Our People',
    component: OurPeople,
    exact: true
  },
  {
    path: paths.ourTeam,
    title: '3.1 Onze Team',
    component: OurTeam,
    exact: true
  },
  {
    path: paths.theWallOfFame,
    title: '3.2 The Wall Of Fame',
    component: TheWallOfFame,
    exact: true
  },
  {
    path: paths.theGoToPeople,
    title: '3.3 The Go To People',
    component: TheGoToPeople,
    exact: true
  },
  {
    path: paths.tasksModuleThree,
    title: '3.4 Opdrachten',
    component: TasksModuleThree,
    exact: true
  },
  // Module 4
  {
    path: paths.howWeWork,
    title: '4 How We Work',
    component: HowWeWork,
    exact: true
  },
  {
    path: paths.ourMethode,
    title: '4.1 Onze Methode',
    component: OurMethode,
    exact: true
  },
  {
    path: paths.insideTheJungle,
    title: '4.2 Binnen ons Jungle',
    component: InsideTheJungle,
    exact: true
  },
  {
    path: paths.outsideTheJungle,
    title: '4.3 Buiten de Jungle',
    component: OutsideTheJungle,
    exact: true
  },
  {
    path: paths.tasksModuleFour,
    title: '4.4 Opdrachten',
    component: TasksModuleFour,
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
    path: paths.clients,
    title: '5.1 Klanten',
    component: Clients,
    exact: true
  },
  {
    path: paths.portfolio,
    title: '5.2 Portfolio',
    component: Portfolio,
    exact: true
  },
  {
    path: paths.future,
    title: '5.3 Toekomst',
    component: Future,
    exact: true
  },
  {
    path: paths.tasksModuleFive,
    title: '5.4 Opdrachten',
    component: TasksModuleFive,
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
