const rubricGroupsRu = require("../../fixtures/rubrics/rubrics-group-ru");

module.exports = [
  {
    id: "rubric-groups-branch",
    url: "/api/rubrics/rubricGroups/branch/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: rubricGroupsRu,
        },
      },
    ],
  },
];
