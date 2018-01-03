// @flow
import settings, { type State as SettingsState } from './settings'

// Flow Types
export type AppState = {
  settings: SettingsState
}

// App State
const State: AppState = {
  settings
}

export default State
