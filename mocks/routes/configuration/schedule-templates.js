const scheduleTemplates = require("../../fixtures/configuration/schedule-templates-ru");

module.exports = [
  {
    id: "schedule-templates",
    url: "/api/configuration/scheduleTemplates",
    method: "GET",
    variants: [
      {
        id: "russia",
        type: "json",
        options: {
          status: 200,
          body: scheduleTemplates,
        },
      },
    ],
  },
];
