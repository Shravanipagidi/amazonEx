/// <reference types="cypress" />



describe('verify HRM App', () => {


    it('Alert - simple alert', () => {


        //launch application
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate a JS alert
        cy.get('button[onclick="jsAlert()"]').click();

        //validation step
         cy.get('p#result').should('have.text','You successfully clicked an alert')




        

    })




})

 
it('Alert - confirm alert', () => {


    //launch application
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//generate a JS confirm alert
  cy.get('button[onclick="jsConfirm()"]').click();

//validation step
cy.get('p[id="result"]').should('have.text','You clicked: Ok')

})

it.only('Alert - confirm alert', () => {
    // test case
    //it("Scenario 1", function () {
       //URL launch
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       //handling prompt alert
       cy.window().then(function(p){
          //stubbing prompt window
          cy.stub(p, "prompt").returns("AutomationLearning");
          // click on Click for JS Prompt button
          cy.get(':nth-child(3) > button').click()
          // verify application message on clicking on OK
          cy.get('#result').contains('You entered: AutomationLearning')
       });
    });