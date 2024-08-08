module.exports = [
  {
    id: "hybrid-check",
    url: "/api/Hybrid/check/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: [false],
        },
      },
    ],
  },
];
