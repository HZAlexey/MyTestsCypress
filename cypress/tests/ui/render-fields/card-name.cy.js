/// <reference types="cypress" />
// ^ Импортируем typescript типы. Так IDE или редактор начнет подсказывать и будет автодополнение

// Описываем какой функционал будем тестировать. Например ""
context("Блок Домашнее задание", () => {

  // Описываем какие тесты будут внутри группы
  describe("Проверяем, блок 'Название'", () => {

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

      // заходим на страницу карточки
      cy.visit("/card/1");

      // заходим в раздел Название
      cy.get("button[id=Name]").click();
    });

    it.skip("Проверим, что заполнен бренд", () => {
      // Проверим, что заполнен бренд
      cy.get("input[data-cy=value-BrandName]").should('have.value', '');
    });

    // ОПФ
    it.skip("Проверим, что количество значений поля ОПФ верное", () => {
      // Кликаем на список чтобы раскрыть его
      cy.get("div[data-cy=OrganizationLegalForm]").click();

      // Проверить, что в выпадающем списке 8 штук
      cy.get('div[data-test-id=virtuoso-item-list]')
        .find('div[data-index]')
        .should('have.length', 8);
    });


    it.skip("Выбрать значение ОПФ", () => {

      // Кликаем на список чтобы раскрыть его
      cy.get("div[data-cy=OrganizationLegalForm]").click();

      // Выбрать ОПФ "ОАО"
      cy.get('div[data-test-id=virtuoso-item-list]')
        .find(`div[data-index=2]`) // data-index=2 "ОАО"
        .click();

      // Ввести рандомное Юр. название
      cy.get('input[data-cy=value-LegalName]').type(randomString);

      // проверяем, что ОПФ верный
      cy.get('input[data-cy=value-OrganizationLegalForm]')
        .should('have.value', 'ОАО');

      // проверить, что введенное Юр.название отображается
      cy.get("input[data-cy=value-LegalName]")
      .should('have.value', randomString);
    });
  });

  describe("Проверяем, блок 'Адрес'", () => {

    beforeEach(() => {
      // устанавливаем коллецию моков
      cy.mocksSetCollection("card-name-attributes-render");

      // заходим на страницу карточки
      cy.visit("/card/1");
    });

    // Адрес
    it("Проверим, что адрес заполнен", () => {
      // Проверим, что адрес заполнен
      cy.get("button[id=BaseCard]").click();

      // Регион/Область/Город
      cy.get("input[data-cy=value-city-suggester]")
        .should('have.value', 'Чита г. (Чита городской округ, Забайкальский край, Россия)');

      // Улица/Адрес
      cy.get("input[data-cy=value-street-suggester]")
        .should('have.value', 'Вокзальная');

      // Дом
      cy.get("input[data-cy=value-address-suggester]")
        .should('have.value', '3 лит А');

      // Этаж
      cy.get('div[role="button"]')
      .contains('1') // Проверяем, что этаж = 1


    });
  });

  describe("Проверяем, блок 'Рубрики'", () => {

    it.skip("Проверим рубрики", () => {
      // Проваливаемся в раздел Рубрики
      cy.get("button[id=Rubrics]").click();

      // Проверяем, что рубрика присутствует
      cy.get('.muiltr-1vzeqm4-tableRow.muiltr-1pvutzm-hoverRow.muiltr-ma96fa-rowDirectionAlignItemsCenter')
        .should('be.visible');

      // Проверяем, что присутствует кнопка товарная рубрика
      cy.get('.muiltr-tt8r8-rubricRowColumn') // !!! 1) переделать на aria-label 2) проверить что чекбокс активен
        .should('be.visible');

      cy.get('.muiltr-1vzeqm4-tableRow.muiltr-1pvutzm-hoverRow.muiltr-ma96fa-rowDirectionAlignItemsCenter')
        .first() // сделал так, потому что есть несколько элементов с классом выше. А эта команда выбирает первый элемент
        .trigger('mouseover'); // навели мышкой

      cy.get('div[role="tooltip"]') // !!! Проверили, что тултип появился. Проверить что он не пустой
        .should('be.visible');
    });
  });

  describe("Проверяем, блок 'Контакты'", () => {

    it.skip("Проверим Контакты", () => {
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

      // Проверить, что для конкретного контакта
      // есть флаги: Контакт организации, Не публиковать, Тишина факс, Рекламный и их состояния (вк. выкл.) Проверить чекбоксики
    });

  });

});
