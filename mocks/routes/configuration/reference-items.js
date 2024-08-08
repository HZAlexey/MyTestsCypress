const referenceItems = require("../../fixtures/configuration/reference-items-ru-1-1");

module.exports = [
  {
    id: "reference-items",
    url: "/api/configuration/referenceItems",
    method: "GET",
    variants: [
      {
        id: "russia",
        type: "json",
        options: {
          status: 200,
          body: referenceItems,
        },
      },
    ],
  },
];
