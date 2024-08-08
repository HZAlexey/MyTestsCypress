const territories_60 = require("../../fixtures/territories/territories_60");

module.exports = [
  {
    id: "territories",
    url: "/api/address/territories",
    method: "GET",
    variants: [
      {
        id: "60",
        type: "json",
        options: {
          status: 200,
          body: territories_60,
        },
      },
    ],
  },
];
