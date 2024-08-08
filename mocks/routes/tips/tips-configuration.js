const defaulttips = require("../../fixtures/tips/tips-configuration");

module.exports = [
  {
    id: "tips-configurations",
    url: "/api/tips/configurations",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: defaulttips,
        },
      },
    ],
  },
];
