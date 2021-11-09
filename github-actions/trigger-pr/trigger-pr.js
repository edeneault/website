// Constant variables
// const REQUIRED_LABELS = ['Size', 'role', 'Feature']
// const LABEL_MISSING = ['size: missing', 'role missing', 'Feature Missing']
// const SIZE_EXCEPTIONS = ['good first issue']

// Global variables
var github;
var context;

/**
 * Check the labels of an issue, and add/remove labels as necessary
 * @param {Object} g - github object
 * @param {Object} c - context object
 * @returns - returns an object with the action's result, which is passed on to the next action
 */
async function main({ g, c }) {
  github = g;
  context = c;

  console.log(await github.projects.createCard({}), context.payload);
}

module.exports = main;
