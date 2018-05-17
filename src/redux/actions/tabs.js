// @flow

// Flow Types
export type TabState = {
  type: string,
  activeTab: number
}

// Action type constants
export const toggleTabActionType: string = 'TOGGLE_TAB'

// Action creators
export const createToggleTabAction = (activeTab: number): TabState => ({
  type: toggleTabActionType,
  activeTab
})
