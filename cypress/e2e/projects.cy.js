/* eslint-disable no-undef */
describe('Projects Tests', () => {
  it('Projects route check', () => {
    cy.visit('http://localhost:3000/projects')
  })
  it('Header check', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('.header').should('be.visible')
  })
  it('Footer check', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('.footer').should('be.visible')
  })
  it('Page title check', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('.page-header').should('be.visible')
  })
  it('Page title content check', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('.page-header').should('contain', 'Projects')
  })
  it('Project section quantity check', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('.project-section-container').should('have.length', 2)
  })
  it('Project section card quantity check', () => {
    cy.visit('http://localhost:3000/projects')
    cy.get('.project-card-container')
      .each(($container) => {
        cy.wrap($container)
          .find('.project-card')
          .should('have.length.gte', 1)
      })
  })
})
