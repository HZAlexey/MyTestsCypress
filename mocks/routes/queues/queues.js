const defaultQueue = {
  name: "Gunners",
  name_caption: "Gunners",
  type: "Static",
  task_type: "Card",
  client_type: "Operator",
  mode: "CallManual",
  is_promotional: "false",
  country_union: "Russia",
};

const additionalAttributesVerificationQueue = {
  name: "DA_QUEUE",
  name_caption: "Очередь ДА",
  creation_date_utc: "2023-02-18T14:07:43.6167695+07:00",
  is_archived: false,
  description: "Description",
  type: "Dynamic",
  task_type: "Card",
  client_type: "Operator",
  mode: "CallManual",
  productivity_in_day: 100,
  priority: 10001,
  is_promotional: false,
  rubrics: ["164"],
  additional_attributes_process_date_utc: "2023-01-30T12:20:25",
  attributes_mode: "AdditionalAttributes",
  country_union: "Russia",
};

module.exports = [
  {
    id: "queues",
    url: "/api/queues*",
    method: "GET",
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
