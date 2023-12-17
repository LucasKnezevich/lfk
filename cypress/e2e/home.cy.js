/* eslint-disable no-undef */
describe('Home Test', () => {
  it('Home route check', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Header check', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.header').should('be.visible')
  })
  it('Footer check', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.footer').should('be.visible')
  })
  it('Bubble container check', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.bubble-container').should('be.visible')
  })
})
