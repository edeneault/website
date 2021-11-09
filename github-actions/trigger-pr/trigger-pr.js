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
  console.log(context.payload);
  // const results = await github.projects.createCard(
  //   content_id = 2,
  //   content_type = "PullRequest",
  //   column       = "PR Needs Review",
  //   project      = "Project Board",
  //   user = "ChadGoymer"
  // )
}

module.exports = main;
