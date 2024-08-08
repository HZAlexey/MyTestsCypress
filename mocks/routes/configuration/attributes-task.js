const attributes_task = require("../../fixtures/configuration/attributes-task");

module.exports = [
  {
    id: "attributes-task",
    url: "/api/configuration/attributes/3/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: attributes_task,
        },
      },
    ],
  },
];
