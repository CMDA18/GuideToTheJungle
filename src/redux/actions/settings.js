// @flow

// Flow Types
export type TestAction = {
  type: string,
  value: string
}
export type PreloadAction = {
  type: string,
  value: string
}

// Action type constants
export const testActionType: string = 'TEST'
export const preloadActionType: string = 'PRELOAD'

// Action creators
export const createTestAction = (value: string): TestAction => ({
  type: testActionType,
  value
})

export const createPreloadAction = (value: string): PreloadAction => ({
  type: preloadActionType,
  value
})
