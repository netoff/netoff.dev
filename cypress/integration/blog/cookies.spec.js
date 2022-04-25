describe('cookies consent', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays cookie consent panel', () => {
    cy.contains('h2', 'Cookies').closest('.fixed').should('exist')
  })

  it('removes consent panel when Accept All is clicked', () => {
    cy.contains('h2', 'Cookies').should('exist')
    cy.contains('Accept All').click()
    cy.contains('h2', 'Cookies').should('not.exist')
  })

  it('should set appropriate cookies if all Accepted', () => {
    cy.contains('Accept All').click()
    cy.getCookie('preference_consent').should('exist')
    cy.getCookie('analytics_consent').should('exist')
  })

  describe('when cookies are set individually', () => {
    beforeEach(() => {
      cy.contains('h2', 'Cookies').closest('.fixed').contains('Manage').click()
    })

    it('displays cookie preferences', () => {
      cy.contains('Cookies Preferences').should('exist')
    })

    it('displays required cookies', () => {
      cy.contains('Required Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .should('be.checked')
    })

    it('displays preference cookies', () => {
      cy.contains('Preference Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .should('not.be.checked')
    })

    it('displays analytic cookies', () => {
      cy.contains('Analytics Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .should('not.be.checked')
    })

    it('does not allow required cookies to be changed', () => {
      cy.contains('Required Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .check()
        .should('be.checked')
      cy.contains('Cookies Preferences').should('exist')
    })

    it('allows preference cookies to be changed', () => {
      cy.contains('Preference Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .check()
        .should('be.checked')
      cy.contains('Cookies Preferences').should('exist')
    })

    it('allows analytics cookies to be changed', () => {
      cy.contains('Analytics Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .check()
        .should('be.checked')
      cy.contains('Cookies Preferences').should('exist')
    })

    it('closes cookie consent panel if all 3 cookies are checked', () => {
      cy.contains('h2', 'Cookies')
        .closest('.fixed')
        .find("input[type='checkbox']")
        .each(($el) => {
          cy.wrap($el).check()
          cy.contains('Cookies').should('exist')
        })

      cy.contains('h2', 'Cookies')
        .closest('.fixed')
        .contains("input[type='submit']", 'Save')
        .click()
      cy.contains('h2', 'Cookies').should('not.exist')
    })

    it('saves appropriate cookie when Preference cookies are selected', () => {
      cy.contains('h2', 'Cookies')
        .closest('.fixed')
        .contains('Preference Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .check()
      cy.getCookie('preference_consent').should('not.exist')
      cy.contains('h2', 'Cookies')
        .closest('.fixed')
        .contains("input[type='submit']", 'Save')
        .click()
      cy.getCookie('preference_consent').should('exist')
    })

    it('saves appropriate cookie when Analytics cookies are selected', () => {
      cy.contains('h2', 'Cookies')
        .closest('.fixed')
        .contains('Analytics Cookies')
        .parent('div')
        .find("input[type='checkbox']")
        .check()
      cy.getCookie('analytics_consent').should('not.exist')
      cy.contains('h2', 'Cookies')
        .closest('.fixed')
        .contains("input[type='submit']", 'Save')
        .click()
      cy.getCookie('analytics_consent').should('exist')
    })
  })

  describe('when cookies are set already', () => {
    it('displays consent panel if only preference cookie is set', () => {
      cy.setCookie('preference_consent', '1')
      cy.visit('/')

      cy.contains('h2', 'Cookies').should('exist')
    })

    it('displays consent panel if only analytics cookie is set', () => {
      cy.setCookie('analytics_consent', '1')
      cy.visit('/')

      cy.contains('h2', 'Cookies').should('exist')
    })

    it('should not display cookie consent panel', () => {
      cy.setCookie('analytics_consent', '1')
      cy.setCookie('preference_consent', '1')

      // visit root path first to 'warm up' render
      cy.visit('/')
      cy.visit('/blog')

      cy.contains('h2', 'Cookies').should('not.exist')
    })
  })
})
