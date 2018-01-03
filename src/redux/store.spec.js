import createStore from './store'

describe('Store', () => {
  it('Creates a valid store', () => {
    expect(createStore()).toMatchSnapshot()
  })
})
