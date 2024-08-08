module.exports = [
  {
    id: "supported-branches",
    url: "/api/bizaccount/supported-branches",
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
        id: "supported",
        type: "json",
        options: {
          status: 200,
          body: ["1", "9"],
        },
      },
    ],
  },
];