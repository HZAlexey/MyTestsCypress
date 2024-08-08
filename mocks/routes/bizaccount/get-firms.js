const with_contacts = [
  {
    "id": "185409",
    "login": "elena-kuzminyh@mail.ru",
    "name": "Вероника",
    "status": 1,
    "last_visit": "2023-04-14T02:31:29+00:00",
    "state": 0
  },
  {
    "id": "1364870",
    "login": "podsolnushek39@mail.ru",
    "name": "",
    "status": 2,
    "last_visit": "2017-01-18T06:35:36+00:00",
    "state": 0
  },
  {
    "id": "1985066",
    "login": "a@mm.ru",
    "name": "",
    "status": 0,
    "state": 0
  }
];

module.exports = [
  {
    id: "bizaccount-firms",
    url: "/api/bizaccount/firms/*",
    method: ["GET", "POST"],
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
        id: "with_contacts",
        type: "json",
        options: {
          status: 200,
          body: with_contacts,
        },
      },
    ],
  },
];
