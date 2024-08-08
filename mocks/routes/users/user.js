const defaultUser = {
  id: "0",
  display_name: "Test User",
  phone_login: "",
  login: "test.test",
  phone_mode: 0,
  has_access_to_workspace: true,
  has_access_only_to_vorwand_approving: false,
  ui_culture: "ru",
  country_union_types: [1, 2],
};

module.exports = [
  {
    id: "user",
    url: "/api/users",
    method: "GET",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: defaultUser,
        },
      },
    ],
  },
];
