const { defineConfig } = require("cypress");

module.exports = defineConfig({


  retries: {
    runMode: 1,
    openMode: 1,
    },



 // projectId: 'c8teou',
 // projectId: "pxq2yh",
 projectId: "c8teou",
 //npx cypress run --record --key 5f4d7ef1-718a-4b4b-8e79-62a751920906
// screenshotOnRunFailure: false,
"video":true,

  e2e: {

    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {

      // implement node event listeners here
      
    },
  },
});
