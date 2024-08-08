module.exports = [
  {
    id: "firm-cards-in-queue",
    url: "/api/firms/firm-cards-in-queue/*/*",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: [1],
        },
      },
    ],
  },
];
