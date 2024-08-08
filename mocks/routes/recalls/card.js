const recalls = require("../../fixtures/recalls/recalls");

module.exports = [
  {
    id: "recalls-card",
    url: "/api/Recalls/card/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: {},
        },
      },
      {
        id: "card-contacts-attributes-render-recalls",
        type: "json",
        options: {
          status: 200,
          body: recalls,
        },
      },
    ],
  },
];
