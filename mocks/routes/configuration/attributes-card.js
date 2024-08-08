const attributes_card = require("../../fixtures/configuration/attributes-card");
const additional_attributes = require("../../fixtures/configuration/attributes-additional-attributes-verification");

module.exports = [
  {
    id: "attributes-card",
    url: "/api/configuration/attributes/1/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: attributes_card,
        },
      },
      {
        id: "additional-attributes-verification",
        type: "json",
        options: {
          status: 200,
          body: additional_attributes,
        },
      },
    ],
  },
];
