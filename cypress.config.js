const { defineConfig } = require("cypress");

module.exports = defineConfig({
  printWidth: 120,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  trashAssetsBeforeRuns: true,
  useTabs: true,
  watchForFileChanges: false,
  numOfTestsKeptInMemory: 1,
});
