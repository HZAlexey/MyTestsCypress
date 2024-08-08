module.exports = {
  ContactTypes: [
    {
      code: "10000",
      value: "Телефон",
      is_hidden: false,
    },
    {
      code: "10001",
      value: "Факс",
      is_hidden: false,
    },
    {
      code: "10002",
      value: "Web",
      is_hidden: false,
    },
    {
      code: "10003",
      value: "Email",
      is_hidden: false,
    },
    {
      code: "10004",
      value: "ICQ",
      is_hidden: false,
    },
    {
      code: "10005",
      value: "Jabber",
      is_hidden: false,
    },
    {
      code: "10006",
      value: "Skype",
      is_hidden: false,
    },
  ],
  "Статус контакта": [
    {
      code: "11000",
      value: "Новый",
      is_hidden: false,
    },
    {
      code: "11001",
      value: "В плане",
      is_hidden: false,
    },
  ],
  PaymentMethod: [
    {
      code: "1",
      value: "Наличный расчёт",
      is_hidden: false,
    },
    {
      code: "91380",
      value: "Оплата картой через терминал",
      is_hidden: false,
    },
    { code: "101648", value: "Оплата по QR-коду", is_hidden: false },
    { code: "7", value: "Оплата через банк", is_hidden: false },
    { code: "6", value: "Оплата эл. кошельком", is_hidden: false },
    { code: "101021", value: "Перевод с карты", is_hidden: false },
  ],
  PhoneFormat: [
    {
      code: "90113",
      value: "0-000-000-00-00",
      is_hidden: false,
    },
    {
      code: "90114",
      value: "0-0000-00-00-00",
      is_hidden: false,
    },
    {
      code: "90115",
      value: "0-00000-0-00-00",
      is_hidden: false,
    },
  ],
  LicenseConfirmation: [
    {
      code: "2",
      value: "Бумажное",
      is_hidden: false,
    },
    {
      code: "3",
      value: "Электронное",
      is_hidden: false,
    },
    {
      code: "4",
      value: "В интернете",
      is_hidden: false,
    },
  ],
  "Статусы карточки": [
    {
      code: "20000",
      value: "Белый",
      is_hidden: false,
    },
    {
      code: "20001",
      value: "Желтый",
      is_hidden: false,
    },
    {
      code: "20003",
      value: "Серый",
      is_hidden: false,
    },
  ],
  NumberOfEmployees: [
    {
      code: "2",
      value: "до 15",
      is_hidden: false,
    },
    {
      code: "3",
      value: "16-100",
      is_hidden: false,
    },
    {
      code: "4",
      value: "101-250",
      is_hidden: false,
    },
    {
      code: "5",
      value: "251-1000",
      is_hidden: false,
    },
    {
      code: "6",
      value: "более 1000",
      is_hidden: false,
    },
  ],
  CardHideReason: [
    {
      code: "24005",
      value: "Временно не функционирует",
      is_hidden: false,
    },
    {
      code: "24012",
      value: "Исходящая региональная реклама",
      is_hidden: false,
    },
    {
      code: "24002",
      value: "Не дозвонились",
      is_hidden: false,
    },
    {
      code: "24003",
      value: "Не сверили информацию",
      is_hidden: true,
    },
    {
      code: "24001",
      value: "Недостаточно информации",
      is_hidden: true,
    },
    {
      code: "24011",
      value: "Новая",
      is_hidden: true,
    },
    {
      code: "24008",
      value: "Отсутствие разрешающего документа",
      is_hidden: false,
    },
    {
      code: "91222",
      value: "Отсутствуют телефоны и электронные контакты",
      is_hidden: false,
    },
    {
      code: "24009",
      value: "Строительство заморожено",
      is_hidden: false,
    },
    {
      code: "24010",
      value: "Улица не привязана",
      is_hidden: true,
    },
  ],
  CardArchiveReason: [
    {
      code: "25007",
      value: "Дом сдан в эксплуатацию",
      is_hidden: false,
    },
    {
      code: "25003",
      value: "Дублирующаяся карточка",
      is_hidden: false,
    },
    {
      code: "91223",
      value: "Не входит в границы проекта",
      is_hidden: false,
    },
    {
      code: "90750",
      value: "Не найдено на местности",
      is_hidden: false,
    },
    {
      code: "25004",
      value: "Не соответствует внутренним стандартам",
      is_hidden: false,
    },
    {
      code: "25002",
      value: "Не удалось дозвониться в течение 2 циклов",
      is_hidden: false,
    },
    {
      code: "25005",
      value: "Организация закрылась",
      is_hidden: false,
    },
    {
      code: "91377",
      value: "Организация закрытого типа - отказ от размещения",
      is_hidden: false,
    },
    {
      code: "25001",
      value: "Отсутствие дополнительных контактов",
      is_hidden: true,
    },
    {
      code: "25008",
      value: "Снятие региональной рекламы",
      is_hidden: false,
    },
    {
      code: "90648",
      value: "Факс-автомат",
      is_hidden: true,
    },
    {
      code: "91518",
      value: "Фиктивная организация / Секта",
      is_hidden: false,
    },
  ],
  ContactHideReason: [
    {
      code: "26003",
      value: "Контакт временно не функционирует",
      is_hidden: false,
    },
    {
      code: "26001",
      value: "Не дозвонились",
      is_hidden: false,
    },
    {
      code: "90158",
      value: "Не подтвердили",
      is_hidden: false,
    },
    {
      code: "26004",
      value: "Отказ от сверки",
      is_hidden: false,
    },
    {
      code: "91226",
      value: "Превышает объем справочной информации",
      is_hidden: false,
    },
    {
      code: "26002",
      value: "Просили перезвонить",
      is_hidden: false,
    },
    {
      code: "26009",
      value: "Сайт не информативен",
      is_hidden: false,
    },
    {
      code: "90070",
      value: "Сайт ненадлежащего содержания",
      is_hidden: false,
    },
  ],
  IsToLicense: [
    {
      "code": "2",
      "value": "Нет",
      "is_hidden": false
    },
    {
      "code": "3",
      "value": "Да",
      "is_hidden": false
    }
  ],
  ContactArchiveReason: [
    {
      code: "28005",
      value: "Домен продается / не продлен",
      is_hidden: false,
    },
    {
      code: "28011",
      value: "Дублируется в карточке",
      is_hidden: false,
    },
    {
      code: "28009",
      value: "Дублируется в связанных карточках",
      is_hidden: false,
    },
    {
      code: "28002",
      value: "Контакт больше не функционирует",
      is_hidden: false,
    },
    {
      code: "28004",
      value: "Контакт не принадлежит организации",
      is_hidden: false,
    },
    {
      code: "28008",
      value: "Не дозвонились 2 цикла",
      is_hidden: false,
    },
    {
      code: "90072",
      value: "Сайт с вирусами",
      is_hidden: false,
    },
    {
      code: "90649",
      value: "Тишина/факс/автоответчик 2 цикла",
      is_hidden: false,
    },
    {
      code: "28003",
      value: "Частный контакт",
      is_hidden: false,
    },
  ],
  ContactDescription: [
    {
      code: "29051",
      value: "аварийная служба",
      is_hidden: false,
    },
    {
      code: "29001",
      value: "автоинформатор",
      is_hidden: false,
    },
    {
      code: "29002",
      value: "администратор",
      is_hidden: false,
    },
    {
      code: "29003",
      value: "администрация",
      is_hidden: false,
    },
    {
      code: "29004",
      value: "бесплатная горячая линия",
      is_hidden: false,
    },
    {
      code: "29005",
      value: "бесплатная единая справочная",
      is_hidden: false,
    },
    {
      code: "50668",
      value: "бесплатная круглосуточная горячая линия",
      is_hidden: false,
    },
    {
      code: "50667",
      value: "бесплатная круглосуточная единая справочная",
      is_hidden: false,
    },
  ],
  OrganizationLegalForm: [
    {
      code: "50000",
      value: "ООО",
      is_hidden: false,
    },
    {
      code: "50001",
      value: "ИП",
      is_hidden: false,
    },
    {
      code: "50002",
      value: "ОАО",
      is_hidden: false,
    },
    {
      code: "50003",
      value: "ЗАО",
      is_hidden: false,
    },
    {
      code: "50020",
      value: "ГП",
      is_hidden: false,
    },
    {
      code: "50021",
      value: "МП",
      is_hidden: false,
    },
    {
      code: "50023",
      value: "ОДО",
      is_hidden: false,
    },
  ],
  ReferencePoint: [
    {
      code: "50100",
      value: "вход в арке",
      is_hidden: false,
    },
    {
      code: "50101",
      value: "вход в арку",
      is_hidden: false,
    },
    {
      code: "50102",
      value: "вход в левую арку",
      is_hidden: false,
    },
    {
      code: "50103",
      value: "вход в метро",
      is_hidden: false,
    },
    {
      code: "50104",
      value: "вход в правую арку",
      is_hidden: false,
    },
    {
      code: "50105",
      value: "вход с торца",
      is_hidden: false,
    },
    {
      code: "50106",
      value: "вход с ул.",
      is_hidden: false,
    },
    {
      code: "50107",
      value: "вход со двора",
      is_hidden: false,
    },
    {
      code: "50108",
      value: "въезд с ул.",
      is_hidden: false,
    },
    {
      code: "50109",
      value: "левое крыло",
      is_hidden: false,
    },
    {
      code: "50110",
      value: "мансардный этаж",
      is_hidden: false,
    },
    {
      code: "50111",
      value: "правое крыло",
      is_hidden: false,
    },
    {
      code: "50112",
      value: "цоколь",
      is_hidden: false,
    },
  ],
  AddressDescriptions: [
    {
      code: "50200",
      value: "Библиотека",
      is_hidden: false,
    },
    {
      code: "50201",
      value: "Внешние воздушные линии",
      is_hidden: false,
    },
    {
      code: "50202",
      value: "Внутренние воздушные линии",
      is_hidden: false,
    },
    {
      code: "50203",
      value: "Дополнительный офис",
      is_hidden: false,
    },
    {
      code: "50204",
      value: "Местоположение",
      is_hidden: false,
    },
    {
      code: "50205",
      value: "Операционная касса",
      is_hidden: false,
    },
    {
      code: "50206",
      value: "Операционный офис",
      is_hidden: false,
    },
    {
      code: "50207",
      value: "Офис",
      is_hidden: false,
    },
    {
      code: "50208",
      value: "Представительство в городе",
      is_hidden: false,
    },
    {
      code: "50209",
      value: "Приемная комиссия",
      is_hidden: false,
    },
  ],
  Entry: [
    {
      code: "50300",
      value: "со двора",
      is_hidden: false,
    },
    {
      code: "50301",
      value: "с торца",
      is_hidden: false,
    },
    {
      code: "50302",
      value: "в левую арку",
      is_hidden: false,
    },
    {
      code: "50303",
      value: "в правую арку",
      is_hidden: false,
    },
    {
      code: "50304",
      value: "в метро",
      is_hidden: false,
    },
    {
      code: "50305",
      value: "в арку",
      is_hidden: false,
    },
    {
      code: "50306",
      value: "в арке",
      is_hidden: false,
    },
    {
      code: "50307",
      value: "в арку направо",
      is_hidden: false,
    },
    {
      code: "50308",
      value: "в арку налево",
      is_hidden: false,
    },
  ],
  "Комментарии ко времени работы": [
    {
      code: "90195",
      value: "автомойка:",
      is_hidden: false,
    },
    {
      code: "90196",
      value: "администрация:",
      is_hidden: false,
    },
    {
      code: "90197",
      value: "ателье:",
      is_hidden: false,
    },
    {
      code: "90198",
      value: "боулинг:",
      is_hidden: false,
    },
  ],
  "Названия этажей": [
    {
      code: "91005",
      value: "мансардный",
      is_hidden: false,
    },
    {
      code: "91006",
      value: "цокольный",
      is_hidden: false,
    },
  ],
  foodservice_food: [
    {
      code: "65074",
      value: "Австралийская кухня",
      is_hidden: false,
    },
    {
      code: "65075",
      value: "Австрийская кухня",
      is_hidden: false,
    },
    {
      code: "91221",
      value: "Авторская кухня",
      is_hidden: false,
    },
    {
      code: "90302",
      value: "Адыгейская кухня",
      is_hidden: false,
    },
    {
      code: "65076",
      value: "Азербайджанская кухня",
      is_hidden: false,
    },
    {
      code: "65077",
      value: "Азиатская кухня",
      is_hidden: false,
    },
  ],
  foodservice_details: [
    {
      code: "65166",
      value: "Бильярд",
      is_hidden: false,
    },
    {
      code: "65173",
      value: "Вегетарианское меню",
      is_hidden: false,
    },
    {
      code: "65163",
      value: "Винная карта",
      is_hidden: false,
    },
  ],
  ServiceLanguage: [
    {
      code: "91537",
      value: "Английский",
      is_hidden: false,
    },
    {
      code: "91538",
      value: "Хинди",
      is_hidden: false,
    },
    {
      code: "91539",
      value: "Арабский",
      is_hidden: false,
    },
    {
      "code": "91548",
      "value": "Китайский",
      "is_hidden": false
  }
  ],
  business_type_new: [
    {
      code: "98897",
      value: "Розница",
      is_hidden: false,
    },
    {
      code: "98896",
      value: "Интернет-магазин",
      is_hidden: false,
    },
    {
      code: "98899",
      value: "Производство",
      is_hidden: false,
    },
    {
      code: "98898",
      value: "Опт",
      is_hidden: false,
    },
  ],
  Расширение: [
    {
      code: "99172",
      value: "автомагазин",
      is_hidden: false,
    },
    {
      code: "99173",
      value: "автосалон",
      is_hidden: false,
    },
    {
      code: "99174",
      value: "агентство",
      is_hidden: false,
    },
  ],
  HotelRating: [
    {
      code: "30600",
      value: "1",
      is_hidden: false,
    },
    {
      code: "30601",
      value: "2",
      is_hidden: false,
    },
    {
      code: "30602",
      value: "3",
      is_hidden: false,
    },
    {
      code: "30603",
      value: "4",
      is_hidden: false,
    },
    {
      code: "30604",
      value: "5",
      is_hidden: false,
    },
    {
      code: "101549",
      value: "Без звёзд",
      is_hidden: false,
    }
  ],
  foodservice_bar_type: [
    {
      code: "99275",
      value: "Бургерные",
      is_hidden: false,
    }
  ],
  cocktail_bars_types: [
    {
      code: "101834",
      value: "Глинтвейн",
      is_hidden: false,
    }
  ],
  inclusive_environment: [
    {
      "code": "101513",
      "value": "Банкомат для незрячих и слабовидящих",
      "is_hidden": false
    },
    {
      "code": "101419",
      "value": "Нет двери / есть автоматическая дверь и нет порога",
      "is_hidden": false
    },
    {
      "code": "102034",
      "value": "Номера для маломобильных групп населения",
      "is_hidden": false
    },
    {
      "code": "101414",
      "value": "Пандус",
      "is_hidden": false
    },
    {
      "code": "101418",
      "value": "Подъёмник для маломобильных групп населения",
      "is_hidden": false
    },
    {
      "code": "101416",
      "value": "Телефон / кнопка вызова для маломобильных групп населения",
      "is_hidden": false
    },
    {
      "code": "101417",
      "value": "Туалет для маломобильных групп населения",
      "is_hidden": false
    },
    {
      "code": "101415",
      "value": "Широкий лифт (грузовой)",
      "is_hidden": false
    }
  ],
  types_of_restaurant: [
    {
      "code": "101861",
      "value": "Панорамный ресторан",
      "is_hidden": false
    },
    {
      "code": "101863",
      "value": "Ресторан на крыше",
      "is_hidden": false
    },
    {
      "code": "101862",
      "value": "Ресторан у воды",
      "is_hidden": false
    }
  ],
  "foodservice_infrastructure": [
    {
      "code": "65178",
      "value": "VIP-зал",
      "is_hidden": false
    },
    {
      "code": "90303",
      "value": "Аниматоры  / мастер-классы для детей в кафе / ресторане",
      "is_hidden": false
    },
    {
      "code": "101058",
      "value": "Детская игровая / комната в кафе / ресторане",
      "is_hidden": false
    },
    {
      "code": "65180",
      "value": "Детский уголок в кафе / ресторане",
      "is_hidden": false
    },
    {
      "code": "91326",
      "value": "Красивый панорамный вид из кафе / ресторана",
      "is_hidden": false
    },
    {
      "code": "65176",
      "value": "Летняя терраса",
      "is_hidden": false
    },
    {
      "code": "90305",
      "value": "Настольные игры в кафе / ресторане",
      "is_hidden": false
    },
    {
      "code": "90304",
      "value": "Проведение банкетов",
      "is_hidden": false
    },
    {
      "code": "65179",
      "value": "Танцпол в кафе / ресторане",
      "is_hidden": false
    }
  ],
  "HotelInfrastructure": [
    {
      "code": "40014",
      "value": "SPA",
      "is_hidden": false
    },
    {
      "code": "90650",
      "value": "Банкетные залы",
      "is_hidden": false
    },
    {
      "code": "40008",
      "value": "Бассейн",
      "is_hidden": false
    },
  ],
  "sauna_details": [
    {
      "code": "80036",
      "value": "Бильярд",
      "is_hidden": false
    },
    {
      "code": "91028",
      "value": "Кальян",
      "is_hidden": false
    },
    {
      "code": "91029",
      "value": "Камин",
      "is_hidden": false
    },
  ],
  "sauna_infrastructure": [
    {
      "code": "91027",
      "value": "Гидромассаж",
      "is_hidden": false
    },
  ],
  "sauna_steam_type": [
    {
      "code": "90709",
      "value": "Инфракрасная сауна",
      "is_hidden": false
    },
  ],
  "sauna_services": [
    {
      "code": "91033",
      "value": "Веники",
      "is_hidden": false
    },
  ],
  "SkiCenter_Ski_Trail_Type": [
    {
      "code": "91168",
      "value": "Беговые трассы",
      "is_hidden": false
    },
  ],
  "summer_equipment_rent_types": [
    {
      "code": "91521",
      "value": "Беговые лыжи",
      "is_hidden": false
    },
  ],
  "ExternalServiceNames": [
    {
        "code": "101606",
        "value": "Отелло",
        "is_hidden": false
    }
]
};
