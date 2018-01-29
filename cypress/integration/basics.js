//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Basic site rendering', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}`)
    cy.title().should('be', 'Home - Basic Project')
  })
})

