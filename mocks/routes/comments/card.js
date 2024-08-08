const comments = require("../../fixtures/comments/comments");

module.exports = [
  {
    id: "comments-card",
    url: "/api/Comments/card/*",
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
        id: "card-comments-attributes-render",
        type: "json",
        options: {
          status: 200,
          body: comments,
        },
      },
    ],
  },
];
