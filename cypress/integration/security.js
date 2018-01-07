/*
Test security headers set by helmet,
this should be ran on the server build (:9000) NOT on your development build
*/
describe('Security', () => {
  it('.expect() - headers to be set', () => {
    cy.request(`${Cypress.env('BASE_URL')}`).then((response) => {
      expect(response.headers).property('strict-transport-security')
      expect(response.headers['strict-transport-security']).to.equal('max-age=15552000; includeSubDomains')
      expect(response.headers).property('x-content-type-options')
      expect(response.headers['x-content-type-options']).to.equal('nosniff')
      expect(response.headers).property('x-dns-prefetch-control')
      expect(response.headers['x-dns-prefetch-control']).to.equal('off')
      expect(response.headers).property('x-download-options')
      expect(response.headers['x-download-options']).to.equal('noopen')
      expect(response.headers).property('x-frame-options')
      expect(response.headers['x-frame-options']).to.equal('SAMEORIGIN')
      expect(response.headers).property('x-xss-protection')
      expect(response.headers['x-xss-protection']).to.equal('1; mode=block')
    })
  })
})
