const defaultQueue = {
  queue: {
    name: "Assigned",
    country_union: "None",
  },
  tasks_count: 0,
};

const additionalAttributesVerificationQueue = {
  queue: {
    name: "DA_QUEUE",
    country_union: "Russia",
  },
  tasks_count: 8577,
};

module.exports = [
  {
    id: "queues-brief-statistics",
    url: "/api/Metrics/operation/queues-brief-statistics",
    method: "POST",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: [defaultQueue],
        },
      },
      {
        id: "additional-attributes-verification",
        type: "json",
        options: {
          status: 200,
          body: [additionalAttributesVerificationQueue],
        },
      },
    ],
  },
];
