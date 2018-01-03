import Settings from './settings'

const probeAction = {type: '@@PROBE'}

describe('Settings Reducer', () => {
  it('returns initial state when no state is provided', () => {
    expect(Settings(undefined, probeAction)).toMatchSnapshot()
  })

  it('handles the TEST action', () => {
    expect(Settings(undefined, {
      type: 'TEST',
      value: 'testValue'
    })).toMatchSnapshot()
  })

  it('handles the TEST_SUCCESS action', () => {
    expect(Settings(undefined, {
      type: 'TEST_SUCCESS',
      value: 'testValue'
    })).toMatchSnapshot()
  })

  it('handles the PRELOAD action', () => {
    expect(Settings(undefined, {
      type: 'PRELOAD',
      value: 'testValue'
    })).toMatchSnapshot()
  })

  it('handles the PRELOAD_SUCCESS action', () => {
    expect(Settings(undefined, {
      type: 'PRELOAD_SUCCESS',
      value: 'testValue'
    })).toMatchSnapshot()
  })
})
