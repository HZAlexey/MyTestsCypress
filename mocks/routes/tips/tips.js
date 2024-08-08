const tips = require("../../fixtures/tips/tips-ru");

module.exports = [
  {
    id: "tips",
    url: "/api/tips?**",
    method: "GET",
    variants: [
      {
        id: "russia",
        type: "json",
        options: {
          status: 200,
          body: tips,
        },
      },
    ],
  },
];
