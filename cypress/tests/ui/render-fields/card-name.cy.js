/// <reference types="cypress" />
// ^ Импортируем typescript типы. Так IDE или редактор начнет подсказывать и будет автодополнение

// Описываем какой функционал будем тестировать. Например ""
context("Блок Домашнее задание", () => {

  // Описываем какие тесты будут внутри группы
  describe("Проверяем, блок 'Название'", () => {

    // Случайное значение для ОПФ
      const randomIndex = Math.floor(Math.random() * 7);

    // Функция для написания рандомного текста

      function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;

      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }

    const randomString = generateRandomString(10);


    // Выполняем эти действия перед каждым тестом
    beforeEach(() => {

      // устанавливаем коллецию моков
    cy.mocksSetCollection("additional-attributes-verification");
      //cy.mocksSetCollection("card-name-attributes-render");


      // заходим на страницу карточки
    cy.visit("/card/1");

      // заходим в раздел Название
    cy.get("button[id=Name]").click();
    });

    // Описываем тест - Ожидаемый результат
    it.skip("Проверим, что заполнен бренд", () => {

      // Проверим, что заполнен бренд
      cy.get("input[data-cy=value-BrandName]").should('have.value', '')

    });

        // ОПФ
    it.skip("Проверим, что  количество значений поля ОПФ верное", () => {

        //SELECT COUNT(*)
        //FROM [reference].[UserRefValues]
        //WHERE RefTypeId = 50000
        //AND Hidden = 0
        //AND CultureId = 1

      // Кликаем на список что бы расскрыть его
      cy.get("div[data-cy=OrganizationLegalForm]").click();

          // Проверим что в выпадающем списке 8 штук
      cy.get('div[data-test-id=virtuoso-item-list]')
      .find('div[data-index]')
      .should('have.length', 8);

      // Выбрать произвольный ОПФ
      cy.get('div[data-test-id=virtuoso-item-list]')
      .find(`div[data-index=${randomIndex}]`)
      .click();

      // Очищаем Юр.название
      cy.get('input[data-cy=value-LegalName]').clear();

      // Вписываем рандомное название
      cy.get('input[data-cy=value-LegalName]').type(randomString);

      // Проверяем, что название сохранилось и показывается


      cy.get("button[id=btn_header_save]").click();

      cy.get("button[id=btn_confirm]").click();
      cy.wait(1000); // Ждём 2 секунды

      //cy.get('div[id=txt_name]').should('have.value', `${randomIndex}`)
      cy.get("input[data-cy=value-BrandName]").should('have.value', randomIndex)

    });
  });

  describe("Проверяем, блок 'Адрес'", () => {

    beforeEach(() => {

      // устанавливаем коллецию моков
    //cy.mocksSetCollection("additional-attributes-verification");
      cy.mocksSetCollection("card-name-attributes-render");


      // заходим на страницу карточки
      cy.visit("/card/1");
    });

    // Адрес (готов)
    it.skip("Проверим, что адрес заполнен", () => {

      // Проверим, что адрес заполнен

      cy.get("button[id=BaseCard]").click();

      // Регион/Область/Город
      cy.get("input[data-cy=value-city-suggester]").should('have.value', 'Чита г. (Чита городской округ, Забайкальский край, Россия)')

      // Улица/Адрес
      cy.get("input[data-cy=value-street-suggester]").should('have.value', 'Вокзальная');

      // Дом
      cy.get("input[data-cy=value-address-suggester]").should('have.value', '3 лит А');

      // Этаж
      cy.get('div[data-cy="Floor"]').first().within(() => {
        // Ищем элемент с ролью button внутри элемента с data-cy=Floor
        cy.get('div[role="button"]').within(() => {
          cy.get('span.MuiChip-label.MuiChip-labelMedium.muiltr-14vsv3w').should('have.text', '1');

        })
      });

    });


    it.skip("Проверим рубрики", () => {

      // Проваливаемся в раздел Рубрики

      cy.get("button[id=Rubrics]").click();

      // Проверяем, что рубрика присутствует

      cy.get('.muiltr-1vzeqm4-tableRow.muiltr-1pvutzm-hoverRow.muiltr-ma96fa-rowDirectionAlignItemsCenter')
      .should('be.visible');

      // Проверяем, что присутствует кнопка товарная рубрика

      cy.get('.muiltr-tt8r8-rubricRowColumn')
      .should('be.visible');

      cy.get('.muiltr-1vzeqm4-tableRow.muiltr-1pvutzm-hoverRow.muiltr-ma96fa-rowDirectionAlignItemsCenter')
      .first() // сделал так, потому что есть несколько элементов с классом выше. А эта команда выбирает первый элемент
      .trigger('mouseover'); // навели мышкой

      cy.get('div[role="tooltip"]') // Проверили, что тултип появился
      .should('be.visible');

    });

    it("Проверим Контакты", () => {

      // Проваливаемся в раздел Контакты

      cy.get("button[id=Contacts]").click();

      // Проверяем, что есть кнопка "Контакт организации"
      cy.get('span[aria-label="Контакт организации"]')
      .should('be.visible');

      // Проверяем, что есть кнопка "Не публиковать"

      cy.get('span[aria-label="Не публиковать"]')
      .should('be.visible');


      // Проверяем, что есть кнопка "Тишина факс"

      cy.get('span[aria-label="Тишина/факс"]')
      .should('be.visible');


    });


  });

});
