// Global variables
var github;
var context;

/**
 * Check the labels of an issue, and add/remove labels as necessary
 * @param {Object} g - github object
 * @param {Object} c - context object
 * @returns - a console log ob available objects
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

  // const results = await github.rest.projects.createCard({
  //   content_id: context.payload.number,
  //   content_type: "PullRequest",
  //   column_id: 16743228,
  //   project: "Project Board",
  // });
}

module.exports = main;
