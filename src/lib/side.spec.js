import * as side from './side'

describe('Server/Client Side', () => {
  it('Should say if this is client-side', () => {
    expect(side.isClient).toBeTruthy()
    expect(side.isServer).toBeFalsy()
  })
})
