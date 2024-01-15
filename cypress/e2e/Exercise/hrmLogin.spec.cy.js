

/// <reference types="cypress" />



describe('verify HRM App', ()=>{


  it('TC01: verify login feature', async()=>{

      //launch application
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      
      //verify application title
    cy.title().should('eq','OrangeHRM')
    cy.url().should('contain','login')

      //Identification ------ CSS
      //enter username and password

      

    cy.get('input[name="username"]').clear().type('Admin').should('have.value', 'Admin')
    cy.get('[type="password"]').clear().type('admin123').should('have.value', 'admin123')

      // cy.get('input[name="username"]').clear().type('clearValueAndEneterAgain').should('have.value', 'clearValueAndEneterAgain')


      //click on login button
      cy.get('[type*="sub"]').click()



       //verify application title
      cy.title().should('eq','OrangeHRM')
      cy.url().should('contain','dashboard')


       //dropdown click
  //    cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()

       //logout
    //  cy.get("a[href='/web/index.php/auth/logout']").click()

       //verify application title
      //cy.title().should('eq','OrangeHRM')
      //cy.url().should('contain','login')

  })

})
