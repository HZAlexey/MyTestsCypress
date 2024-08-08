const card_1267165676176291 = require("../../fixtures/cards/card_1267165676176291");
const card_9007727535735748 = require("../../fixtures/cards/card_9007727535735748");
const card_70000001027633242_DEP = require("../../fixtures/cards/card_70000001027633242_DEP");
const card_1 = require("../../fixtures/cards/card_1");
const card_70000001037161841_GDPR = require("../../fixtures/cards/card_70000001037161841_GDPR");

module.exports = [
  {
    id: "get-task",
    url: `/api/tasks/(\\d+)/*`,
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: card_1,
        },
      },
      {
        id: "additional-attributes-verification",
        type: "json",
        options: {
          status: 200,
          body: card_1267165676176291,
        },
      },
      {
        id: "card-name-attributes-render",
        type: "json",
        options: {
          status: 200,
          body: card_9007727535735748
        }
      },
      {
        id: "card-name-attributes-render-dep",
        type: "json",
        options: {
          status: 200,
          body: card_70000001027633242_DEP
        }
      },
      {
        id: "card-panel_card_onfo-attributes-render-GDPR",
        type: "json",
        options: {
          status: 200,
          body: card_70000001037161841_GDPR
        }
      }
    ],
  },
];
