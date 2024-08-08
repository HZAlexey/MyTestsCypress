const streets_1267230100684807 = require("../../fixtures/streets/streets-1267230100684807");

module.exports = [
  {
    id: "streets",
    url: "/api/address/streets/*",
    method: "GET",
    variants: [
      {
        id: "1267230100684807",
        type: "json",
        options: {
          status: 200,
          body: streets_1267230100684807,
        },
      },
    ],
  },
];
