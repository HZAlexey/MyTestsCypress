module.exports = [
  {
    id: "callrecords-card",
    url: "/api/callrecords/card/*",
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
    ],
  },
];
