const allstatus = require("../../fixtures/cards/structure_AllStatus");
const defaultStructure = [
  {
    card_code: "141265769365151",
    status: "Processed",
    territory: "Новосибирск г. (Новосибирск городской округ)",
    name: "Карла Маркса площадь, 1",
    dep_number: "0",
    is_dep: false,
    has_contacts_for_verification: false,
    has_production_floors: false,
    has_errors: false,
    without_phones: false,
  },
];

module.exports = [
  {
    id: "card-structure",
    url: `/api/cards/structure/*`,
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: defaultStructure,
        },
      },
      {
        id: "allstatus",
        type: "json",
        options: {
          status: 200,
          body: allstatus,
        },
      }
    ],
  },
];
