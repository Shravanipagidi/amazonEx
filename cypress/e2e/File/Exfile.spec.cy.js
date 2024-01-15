
/// <reference types="cypress" />

import 'cypress-file-upload';


//reference url - https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm


describe('verify drag drop test', () => {



    it('dragdropTest', ()=>{


        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')



        cy.get('input[name="upfile"]').should('be.visible')            



        //install packge "file-upload"
        

       cy.get('input[name="upfile"]').attachFile('sample.txt', { subjectType:'drag-n-drop' })   //take file from fixture
       cy.get('input[type="submit"]').attachFile('sample.txt').click()  //take file from fixture



         //attach multiple file upload 
        //cy.get('div#drag-drop-upload').attachFile(['file.pdf','sample.txt'], { subjectType: 'drag-n-drop' })     //take file from fixture



        cy.wait(3000)



    })



})
