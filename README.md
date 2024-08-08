# YouRa UI автотесты

## Начало работы

1. Установить [.NET SDK](https://dotnet.microsoft.com/en-us/download)
2. Установить [node.js](https://nodejs.org/en)
3. Установить зависимости необходимые для запуска тестов - `npm install`

### Рекомендуемые плагины для Visual Studio Code

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Форматирование файла Visual Studio Code
`ctrl+shift+f`

## Тесты
Для написания тестов используем [Cypress](https://docs.cypress.io)

[Best Practices](https://docs.cypress.io/guides/references/best-practices)


### Как запустить тесты локально

1. Запусти клиент YouRa - `npm run youra`
2. Запусти mocks-server - `npm run mocks`
3. Запусти Cypress - `npm run cy:run` или `npm run cy:open` для запуска UI

### Как написать тест
Создаем файл `test-name.cy.js` в папке `cypress/tests/ui`

Можно использовать такой шаблон:

<details>

```javascript
/// <reference types="cypress" />
// ^ Импортируем typescript типы. Так IDE или редактор начнет подсказывать и будет автодополнение

// Описываем какой функционал будем тестировать. Например "Cверка доп. атрибутов"
context("Cверка доп. атрибутов", () => {

  // Описываем какие тесты будут внутри группы
  describe("Проверяем наличие обязательных UI элементов для очереди сверки ДА", () => {
    // Выполняем эти действия перед каждым тестом
    beforeEach(() => {

      // устанавливаем коллецию моков
      cy.mocksSetCollection("additional-attributes-verification");

      // заходим на главную страницу
      cy.visit("/");
      // заходим в очередь ДА
      cy.get("[data-cy=DA_QUEUE]").click();
    });

    // Описываем тест - Ожидаемый результат
    it("Должны быть две вкладки ДА, Кнопки сверки ДА и карточки, Сверка ДА", () => {
      // В отличии от unit тестов, в cypress можно(нужно) делать много проверок за один тест (т.к. тесты долгие)
      // https://docs.cypress.io/guides/references/best-practices#Creating-Tiny-Tests-With-A-Single-Assertion

      // проверяем наличие вкладок "ДА сверка" и "ДА Остальные"
      cy.get("button[id=AdditionalAttributesForApproving]").should("exist");
      cy.get("button[id=AdditionalAttributesOther]").should("exist");

      // проверяем наличие кнопки "Сверить ДА"
      cy.get("button[id=btn_header_approve]")
        .trigger("mouseover")
        .click({ force: true });
      cy.get("div[id=menu-list-grow]").contains("Только ДА");
      cy.get("div[id=menu-list-grow]").contains("Как действующую и ДА");
      cy.get("div[id=menu-list-grow]").contains("Как скрытую и ДА");

      // проверяем наличие кнопки для сверки "ДА"
      cy.get("button[id=approve_attribute]").should("exist");
    });
  });
});
```

</details>

Обязательно оставляй комментарии к теста 🙂

#### Взаимодействие с элементами страницы

Для взаимодействия с элементами HTML его надо "найти". Это делаем с помощью команды
```javascript
cy.get("[data-cy=DA_QUEUE]").click();
```

Здесь атрибут `data-cy=DA_QUEUE` означает, что на HTML странице есть такой элемент:
```html
...
<div data-cy="DA_QUEUE">...</div>
...
```

**Скорее всего** атрибут `data-cy` отсутствует. Обязательно попроси разработчика его добавить. В качестве временного решения попробуй использовать `id` или css класс:

``` html
...
<div class="MuiInputBase-input MuiOutlinedInput-input" id="DA_QUEUE">...</div>
...
```

```javascript
cy.get("[id=DA_QUEUE]").click();
cy.get('div[class="MuiInputBase-input MuiOutlinedInput-input"]').click();
```

#### Моки

Для каждого набора тестов нужно создать свою коллецию моков


## Моки

В качестве мок-сервера используем [mocks-server](https://www.mocks-server.org/)
> [Основые понятия](https://www.mocks-server.org/docs/usage/basics/)

### Как создать моки

Пример
Нужно создать мок для API запроса `GET /api/tips`. Для этого

1. В `mocks/routes` создаем папку `tips` </br> В этой папке будут все роуты `/api/tips/***`
2. Для метода `GET /api/tips` создаем файл `tips.js`
3. Создаем конфигурацию мока. URL, HTTP методы и варианты

<details>

```javascript
module.exports = [
  {
    id: "tips",
    url: "/api/tips",
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
        id: "error",
        type: "json",
        options: {
          status: 500,
        },
      },
    ],
  },
];
```

</details>

Сдесь мы сделали мок с двумя вариантами.
`default` - вернет `200 ОК` и пустой массив
`error` - вернет `500 Internal server error`

4. Добавляем варианты в коллецию моков </br>

```javascript
module.exports =[
  {
    id: "default",
    routes: [
    ...
      "tips:default"
    ]
  },
  {
    id: "additional-attributes-verification",
    from: "default",
    routes: [
        ...,
        "tips:error"
    ]
  }
]
```

Для базовой коллекции `default` рекомендуется всегда добавлять вариант `default` (название может быть любим, нужно просто предоставить мок по-умолчанию)

Если в тесте требуются отдельные моки, то добавляем в коллецию другой вариант. Таким образом варинт `default` будет перезаписан

### Коллеции моков

Колекция содержит набор варинатов роутов [link](https://www.mocks-server.org/docs/usage/collections/)

```
Collection => Routes => Variants
```

Например есть две коллеции `default` и `additional-attributes-verification`

<details>

```javascript
module.exports =[
  {
    id: "default",
    routes: [
      "queues:default",
      "user:default",
      "api-configuration:default",
      "phone-config:default",
      "reference-items:russia",
      "attributes:default"
    ]
  },
  {
    id: "additional-attributes-verification",
    from: "default",
    routes: [
      "queues:additional-attributes-verification",
      "attributes:additional-attributes-verification",
      "next-task:additional-attributes-verification",
      "get-task:additional-attributes-verification",
    ]
  }
]

```

</details>

Коллекция `additional-attributes-verification` наследуюется от `default` и будет использовать все роуты, которые определены в `default`. Роуты `queues, attributes` будут переопределены
```javascript
    id: "additional-attributes-verification",
    from: "default",
```

Для использования коллеции в Cypress тесте нужно вызвать команду
``` javascript
beforeEach(() => {
    cy.mocksSetCollection("additional-attributes-verification");
});
```

# F.A.Q

Q: Ошибка безопасности, что делать?

A: Выполни в терминале `Set-ExecutionPolicy RemoteSigned -Scope Process` - это разрешение на запуск скриптов в текущем процессе. 