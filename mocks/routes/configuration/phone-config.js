const configuration = {
  server: "",
  port: "",
  ewa_host: ""
};

module.exports = [
  {
    id: "phone-config",
    url: "/api/configuration/phone",
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
