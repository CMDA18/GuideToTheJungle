import routes, { paths } from './routes'

describe('Routes', () => {
  it('Returns an array of routes', () => {
    expect(routes).toMatchSnapshot()
  })

  it('Returns an array of paths', () => {
    expect(paths).toMatchSnapshot()
  })
})
