describe('Traversal', () => {

  before(()=>{
    cy.visit('https://example.cypress.io/commands/traversal')
  })

  it.only('Finding DOM Selectors', () => {
    cy.get('.traversal-ul>li').filter('.second').should('contain', 'oranges') // here we are expecting a li of class traversal-ul
                                                                              // to have a class second
                                
    cy.get('.traversal-ul .second').siblings().should('have.length', 2)
  })

  it.only('Finding DOM Elements 1', () => {
    cy.get('.traversal-ul')
    .children('.second') // there is a element inside .traversal-breadcrumb that has a class of active
    .should('contain', 'oranges') // we expect it to contain Data

    cy.get('.traversal-ul').eq(0).should('contain', 'apples')
    cy.get('.traversal-ul').find('li').should('have.length', 3) // we are looking for the li's inside class traversal-ul and we 
                                                                  //expect it to have a length of 3
   })

 

  it('Finding DOM Elements 2', () => {
    cy.get('.traversal-ul').first().should('contain', 'apple')
    cy.get('.traversal-ul').last().should('contain', 'bananas')
    cy.get('.traversal-ul').contains('apples').next().should('contain', 'oranges')
    cy.get('.traversal-ul').contains('oranges').prev().should('contain', 'apples')
  })

  it('Finding DOM Elements 3', () => {
    
    cy.get('.traversal-ul').contains('apples').nextAll().should('have.length', 2)
    cy.get('.traversal-ul').contains('bananas').prevAll().should('have.length', 2)
    cy.get('.traversal-ul').contains('oranges').prevAll().should('have.length', 1)
  })
})