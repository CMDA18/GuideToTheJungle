import { testActionType, createTestAction, createPreloadAction } from './settings'

describe('Settings Actions', () => {
  it('Provides a set of constants', () => {
    expect(testActionType).toBe('TEST')
  })

  it('Provides a set of action creators', () => {
    expect(createTestAction('hoi')).toMatchSnapshot()
    expect(createPreloadAction('preload-hoi')).toMatchSnapshot()
  })
})
