/// <reference types="cypress" />



describe('verify dropdown test', () => {


    it('dropdown test', () => {

        //launch application
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('[id="select2-billing_country-result-zo9h-AF"]').click().select('Afghanistan')
    
        

    })


    

})