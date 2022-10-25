const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "fmadpu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/integration/examples/BDD/*.feature",
    defaultCommandTimeout: 8000,
    // reporter: "mochawesome",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/results-[hash].html",
    },
    env: {
      url: "https://rahulshettyacademy.com/angularpractice/",
    },
  },
});
