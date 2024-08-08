const rubrics = require("../../fixtures/rubrics/rubrics-ru");

module.exports = [
  {
    id: "rubrics",
    url: "/api/rubrics?**",
    method: "GET",
    variants: [
      {
        id: "russia",
        type: "json",
        options: {
          status: 200,
          body: rubrics,
        },
      },
    ],
  },
];
