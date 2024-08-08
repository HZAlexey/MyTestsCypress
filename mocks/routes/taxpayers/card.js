const taxpayer_ru_one = require("../../fixtures/taxpayer/taxpayer_ru_one");
const taxpayer_ru_two = require("../../fixtures/taxpayer/taxpayer_ru_two");

module.exports = [
  {
    id: "taxpayers-card",
    url: "/api/taxpayers/cards/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: [],
        },
      },
      {
        id: "GetCardTaxpayerRoute_one",
        type: "json",
        options: {
          status: 200,
          body: taxpayer_ru_one,
        },
      },
      {
        id: "GetCardTaxpayerRoute_two",
        type: "json",
        options: {
          status: 200,
          body: taxpayer_ru_two,
        },
      }
    ],
  },
];
