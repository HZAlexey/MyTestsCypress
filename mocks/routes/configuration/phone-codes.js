const phoneCodes = require("../../fixtures/configuration/phone-codes-russia");

module.exports = [
  {
    id: "phone-codes",
    url: "/api/configuration/phoneCodes",
    method: "GET",
    variants: [
      {
        id: "russia",
        type: "json",
        options: {
          status: 200,
          body: phoneCodes,
        },
      },
    ],
  },
];
