module.exports = [
  {
    id: "default",
    routes: [
      "queues:default",
      "user:default",
      "api-configuration:default",
      "cultures-available:default",
      "phone-config:default",
      "reference-items:russia",
      "attributes-card:default",
      "attributes-task:default",
      "country-phone-codes:default",
      "phone-codes:russia",
      "rubrics:russia",
      "schedule-templates:russia",
      "addresses:1267230100684807",
      "streets:1267230100684807",
      "card-structure:default",
      "bizaccount-firms:default",
      "supported-branches:default",
      "taxpayers-card:default",
      "firm-cards-in-queue:default",
      "rubric-groups-branch:default",
      "rubric-groups-country:default",
      "recalls-card:default",
      "get-task:default",
      "hybrid-check:default",
      "callrecords-card:default",
      "contacts-cards-short:default",
      "comments-card:default",
      "territories:60",
      "address-cards:default",
      "entrances:default",
      "queues-brief-statistics:default",
    ],
  },
  {
    id: "additional-attributes-verification",
    from: "default",
    routes: [
      "queues:additional-attributes-verification",
      "queues-brief-statistics:additional-attributes-verification",
      "attributes-card:additional-attributes-verification",
      "next-task:additional-attributes-verification",
      "get-task:additional-attributes-verification",
    ],
  },
  {
    id: "card-name-attributes-render",
    from: "default",
    routes: ["get-task:card-name-attributes-render"],
  },
  /*
  {
    id: "card-name-attributes-render-dep",
    from: "default",
    routes: ["get-task:card-name-attributes-render-dep"],
  },
  */
  {
    id: "card-Taxpayer-attributes-render_one",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "taxpayers-card:GetCardTaxpayerRoute_one",
    ],
  },
  {
    id: "card-Taxpayer-attributes-render_two",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "taxpayers-card:GetCardTaxpayerRoute_two",
    ],
  },
  {
    id: "card-Address-attributes-render",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "entrances:9008131262647416",
      "address-cards:9008131262647416",
    ],
  },
  {
    id: "card-Address-attributes-render_additional_addresses",
    from: "default",
    routes: ["get-task:additional-attributes-verification"],
  },
  {
    id: "card-contacts-attributes-render",
    from: "default",
    routes: ["get-task:card-name-attributes-render"],
  },
  {
    id: "card-contacts-attributes-render-recalls",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "recalls-card:card-contacts-attributes-render-recalls",
    ],
  },
  {
    id: "card-bizaccount-attributes-render-supported",
    from: "default",
    routes: ["bizaccount-firms:with_contacts", "supported-branches:supported"],
  },
  {
    id: "card-bizaccount-attributes-render-unsupported",
    from: "default",
    routes: ["bizaccount-firms:with_contacts"],
  },
  {
    id: "card-structure-attributes-render",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "card-structure:allstatus",
    ],
  },
  {
    id: "card-tips-attributes-render",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "tips:russia",
      "tips-configurations:default",
    ],
  },
  {
    id: "card-panel_card_onfo-attributes-render-GDPR",
    from: "default",
    routes: ["get-task:card-panel_card_onfo-attributes-render-GDPR"],
  },
  {
    id: "card-comments-attributes-render",
    from: "default",
    routes: [
      "get-task:card-name-attributes-render",
      "card-structure:allstatus",
      "comments-card:card-comments-attributes-render",
    ],
  },
];
