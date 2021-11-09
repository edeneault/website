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
  console.log(context.payload.number, context.payload.repository.owner.login);
  console.log(context.payload);
  for (const item in github.rest.projects) {
    console.log(item);
  }

  // const columns = await github.rest.projects.listColumns();
  // console.log(columns);

  const results = await github.rest.projects.createCard(
    (content_id = context.payload.number),
    (content_typ = "PullRequest"),
    (column_id = 16743228),
    (project = "Project Board"),
    (user = context.payload.repository.owner.login),
  );
}

module.exports = main;
