import Reducers from './index'

describe('Reducers', () => {
  it('Provide a collection of reducer functions', () => {
    expect(Reducers).toMatchSnapshot()
  })
})
