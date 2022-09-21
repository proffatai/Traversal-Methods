///<reference types="cypress" />


describe.skip('Working on different environments', {pageLoadTimeout:40000},() => {

  it('Dev environment', () => {
    cy.visit(Cypress.env("dev"))
  })

  it('Staging enviroment', () => {
    cy.visit(Cypress.env("staging"))
  })

  it.only('Prod enviroment', () => {
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in how many languages')
  })
})

describe('Working on different environments', {keystrokeDelay:2000,pageLoadTimeout:800000},() => { //adding delay on describe level

  it.only('Prod enviroment', () => {
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in 2secs')
  })
})

describe('Working on different environments',() => { 

  it.only('Prod enviroment',{keystrokeDelay:4000}, () => { //adding delay on it level
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in 4secs')
  })
})

describe('Working on different environments',() => { 

  it.only('Prod enviroment', () => {
    cy.visit(Cypress.env("prod"))
    cy.get('.gLFyf').type('Hello world in 1sec',{keystrokeDelay:1000})  //adding delay on selector level
  })
})