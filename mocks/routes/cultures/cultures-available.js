module.exports = [
  {
    id: "cultures-available",
    url: "/api/cultures/available*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: [0],
        },
      },
    ],
  },
];
