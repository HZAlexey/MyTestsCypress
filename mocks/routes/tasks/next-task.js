const card_1267165676176291 = {
  codes: ["1267165676176291"],
  count: 1,
  for_user: false,
};

module.exports = [
  {
    id: "next-task",
    url: `/api/tasks/next/Russia/(\\d+)/*`,
    method: "GET",
    variants: [
      {
        id: "additional-attributes-verification",
        type: "json",
        options: {
          status: 200,
          body: card_1267165676176291,
        },
      },
    ],
  },
];
