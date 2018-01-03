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
    cy.visit(`${Cypress.env('BASE_URL')}`)
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3000')
    cy.title().should('be', 'Home - Basic Project')
  })
})

