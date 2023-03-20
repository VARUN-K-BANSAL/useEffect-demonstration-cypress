import Counter from "../../src/Component/Counter"

describe('template spec', () => {
  it('Should visit', () => {
    cy.visit('http://localhost:3000')
  })

  it('Check Component is Mounted', () => {
    cy.contains('Count')
    // cy.get('h1').should('exist')
    // cy.get('button').should('exist')
    // cy.get('input').should('exist')  
  })
})