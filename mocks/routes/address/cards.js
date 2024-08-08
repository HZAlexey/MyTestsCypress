const cards_9008131262647416 = [
  {
    is_hidden: false,
    is_promotional: true,
    id: "9007727535735748",
    display_name:
      "Электростандарт, магазин светотехники, ООО Медведевых Е.В., официальный представитель Werkel, Elektrostandard",
    status: "Processed",
    firm_id: "70000001025138008",
  },
  {
    is_hidden: false,
    is_promotional: false,
    id: "9007727535735742",
    display_name: "Премьера, салон штор, ИП Байнякшина М.Г.",
    status: "Processed",
    firm_id: "9007736125667798",
  },
  {
    is_hidden: false,
    is_promotional: false,
    id: "9007727535719597",
    display_name: "Водяной, центр сантехники, ООО Комплект",
    status: "Processed",
    firm_id: "9007736125654189",
  },
];

module.exports = [
  {
    id: "address-cards",
    url: "/api/address/cards/*",
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
          body: cards_9008131262647416,
        },
      },
    ],
  },
];
