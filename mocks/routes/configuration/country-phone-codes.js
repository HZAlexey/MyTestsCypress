const countryPhoneCodes = [{
  "code": "11",
  "value": "380",
  "is_hidden": false,
  "description": "Украина"
}, {
  "code": "1",
  "value": "7",
  "is_hidden": false,
  "description": "Россия"
}, {
  "code": "3",
  "value": "375",
  "is_hidden": false,
  "description": "Республика Беларусь"
}, {
  "code": "4",
  "value": "7",
  "is_hidden": false,
  "description": "Казахстан"
}
];

module.exports = [
  {
    id: "country-phone-codes",
    url: "/api/configuration/countryPhoneCodes",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: countryPhoneCodes,
        },
      },
    ],
  },
];
