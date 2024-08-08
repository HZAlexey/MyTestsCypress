const addresses_1267230100684807 = [
  {
    id: "141669496269350",
    building_id: "141373143533157",
    building_branch_id: "1",
    branch_id: "1",
    country_id: "1",
    is_conditional: false,
    has_production_floors: false,
    is_linked: true,
    value: "1",
  },
  {
    id: "141669496272111",
    building_id: "141373143572328",
    building_branch_id: "1",
    branch_id: "1",
    country_id: "1",
    is_conditional: false,
    has_production_floors: false,
    is_linked: true,
    value: "7",
  },
  {
    id: "141669496272112",
    building_id: "141373143572329",
    building_branch_id: "1",
    branch_id: "1",
    is_conditional: false,
    has_production_floors: false,
    is_linked: true,
    value: "121",
  },
];

module.exports = [
  {
    id: "addresses",
    url: "/api/address/addresses/*",
    method: "GET",
    variants: [
      {
        id: "1267230100684807",
        type: "json",
        options: {
          status: 200,
          body: addresses_1267230100684807,
        },
      },
    ],
  },
];
