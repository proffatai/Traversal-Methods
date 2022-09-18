const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
    watchForFileChanges:false,
    chromeWebSecurity:false,
    specPattern:["cypress/e2e/traversal.cy.js","cypress\\e2e\\environment.cy.js","cypress/e2e/handling_different_boxes.cy.js"],
    env:{
      "dev":"https://www.babbangona.com",
      "staging":"https://www.facebook.com",
      "prod":"https://www.google.com"
    },
  
  },
});
