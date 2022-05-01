/// <reference types="cypress" />

// Welcome to Cypress!
//
// https://on.cypress.io/introduction-to-cypress

describe("netoff's blog", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays main index page ', () => {
    cy.contains('Dusan Pantelic')
  })

  it('displays blog page with articles', () => {
    cy.get('#mobile-menu-button').click()
    cy.get('#mobile-menu').contains('Blog').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/blog')
    })

    cy.get('article:first').find('h2').find('a:first').click()
    cy.get('h1').should('have.class', 'text-3xl')
    cy.contains('View on GitHub')
  })

  it('displays projects page', () => {
    cy.get('#mobile-menu-button').click()
    cy.get('#mobile-menu').contains('Projects').click()
    cy.get('h1.text-3xl').contains('Projects')
  })

  it('displays about page', () => {
    cy.get('#mobile-menu-button').click()
    cy.get('#mobile-menu').contains('About').click()
    cy.get('h1.text-3xl').contains('About Dusan Pantelic')
  })

  it('displays cookies policy', () => {
    cy.contains('Accept All').click()
    cy.get("[href='/cookies_policy']").click()
    cy.get('h1#cookie-policy').contains('COOKIE POLICY')
    cy.contains('Back').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  })
})
