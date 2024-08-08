const entrances_9008131262647416 = [
    {
        "id": "70030076167107610",
        "name": "в мегастрой вход 1",
        "address_text": "Вокзальная 3 лит А",
        "address_id": "2849834",
        "building_id": "9007834909902087",
        "is_default": false,
        "is_porch": false
    },
    {
      "id": "9008242931800157",
      "name": "в мегастрой вход 2",
      "address_text": "Вокзальная 3 лит А",
      "address_id": "2849834",
      "building_id": "9007834909902087",
      "is_default": false,
      "is_porch": false
    } ,
    {
        "id": "70030076368939926",
        "name": "на второй этаж в столы и стулья",
        "address_text": "Вокзальная 3 лит А",
        "address_id": "2849834",
        "building_id": "9007834909902087",
        "is_default": false,
        "is_porch": false
    },
  ];

module.exports = [
  {
    id: "entrances",
    url: "/api/address/entrances/*",
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
        id: "9008131262647416",
        type: "json",
        options: {
          status: 200,
          body: entrances_9008131262647416,
        },
      },
    ],
  },
];
