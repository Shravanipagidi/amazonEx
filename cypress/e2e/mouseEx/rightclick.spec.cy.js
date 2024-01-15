
/// <reference types="cypress"/>

describe('tigger test', () => {

    it('double click test', ()=>{


        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        
        //double click operation on element

        //app1
        //cy.get('[ondblclick="myFunction()"]').trigger('contextmenu')



        //app2
        cy.xpath("//span[text()='right click me']").trigger('contextmenu')
        cy.xpath("//span[text()='Delete']").click()


        cy.screenshot("rightclick")
        //validate alert

       cy.on('window:alert', (alert)=>{
      expect(alert).to.contain('clicked: delete')

     })



    })



})