const rubricGroupsRu = require("../../fixtures/rubrics/rubrics-group-ru");

module.exports = [
  {
    id: "rubric-groups-country",
    url: "/api/rubrics/rubricGroups/country/*",
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
