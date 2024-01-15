describe('template spec', () => {

    it('passes', () => {

        //amazon website
      cy.visit('https://www.amazon.in/') 

      //search for smart watches
      cy.get('[placeholder="Search Amazon.in"]').clear().type("smart watches")

      //click action
      cy.get('[value="Go"]').click()
  
      //verify the page title should contain smart watches
      cy.title().should('contain','smart watches')

    
  
    })
  })