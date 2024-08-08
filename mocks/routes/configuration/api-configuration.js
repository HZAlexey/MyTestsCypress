const configuration = {
  youla_vorwand_url: "http://youla-staging.2gis.local/vorwand#/id=",
  web_share_url: "http://uk-ir-testers.2gis.local:8090/",
  is_production: false,
};

module.exports = [
  {
    id: "api-configuration",
    url: "/api/configuration/apiConfig",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: configuration,
        },
      },
    ],
  },
];
