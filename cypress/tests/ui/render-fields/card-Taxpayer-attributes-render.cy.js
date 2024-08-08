/// <reference types="cypress" />

context("Проверка Отображения ИНН на вкладке 'Название'", () => {
  it("В карточке нет ИНН", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-name-attributes-render");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "Название"
    cy.get("button[id=Name]")
      .click();

    //----------Проверяем блок "Информация о налогоплательщике"----------------
    // Проверяем, что нет таблицы с данными Налогоплатильщика
    cy.get("div[data-cy=taxpayers]")
      .should("not.exist");

    // Проверяем, что есть строка добавления нового НП + кнопка Добавления.
    cy.get("div[id=c_taxpayer]")
      .within(() => {
        cy.get("button[id=btn_add]")
          .should("exist");
      });

    // Проверяем нет кнопки "Еще № налогоплательщика"
    cy.get("div[data-cy=taxpayer-table-row-more]")
      .should("not.exist");
  });

  it("В карточке только один ИНН", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-Taxpayer-attributes-render_one");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "Название"
    cy.get("button[id=Name]")
      .click();

    //----------Проверяем блок "Информация о налогоплательщике"----------------
    // Проверяем, что есть Тип Налогоплатильщика
    cy.get("h3[data-cy=taxpayer-type]")
      .contains("ИНН/ОГРН")
      .should("exist");

    // Проверяем, что есть ИНН/ОГРН
    cy.get("h3[data-cy=taxpayer-value]")
      .contains("753403374213 / 308753625600022")
      .should("exist");

    // Проверяем, что есть статус
    cy.get("svg[data-cy=taxpayer-status-active]")
      .should("exist")
      .should("have.attr", "aria-label", "Активный");

    // Проверяем, что есть кнопка удаления ИНН
    cy.get("svg[data-cy=btn-delete-new-taxpayer]")
      .should("exist");

    // Проверяем, что есть строка добавления нового НП + кнопка Добавления.
    cy.get("div[id=c_taxpayer]")
      .within(() => {
        cy.get("button[data-cy=btn-add-taxpayer]")
          .should("exist");
      });

    // Проверяем, что нет кнопки "Еще № налогоплательщика"
    cy.get("div[data-cy=taxpayer-table-row-more]")
      .should("not.exist");
  });

  it("В карточке есть несколько ИНН", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-Taxpayer-attributes-render_two");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    // Открываем вкладку "Название"
    cy.get("button[id=Name]")
      .click();

    //----------Проверяем блок "Информация о налогоплательщике"----------------
    // Проверяем, что есть Тип Налогоплатильщика
    cy.get("h3[data-cy=taxpayer-type]")
      .contains("ИНН/ОГРН")
      .should("exist");

    // Проверяем, что есть ИНН/ОГРН
    cy.get("h3[data-cy=taxpayer-value]")
      .contains("753403374213 / 308753625600022")
      .should("exist");

    // Проверяем, что есть статус
    cy.get("svg[data-cy=taxpayer-status-active]")
      .should("exist");

    // Проверяем, что есть кнопка удаления ИНН
    cy.get("svg[data-cy=btn-delete-new-taxpayer]")
      .should("exist");

    // Проверяем, что есть строка добавления нового НП + кнопка Добавления.
    cy.get("div[id=c_taxpayer]")
      .within(() => {
        cy.get("button[data-cy=btn-add-taxpayer]")
          .should("exist");
      });

    // Проверяем, что нет строки со вторым ИНН/ОГРН
    cy.get("h3[data-cy=taxpayer-value]")
      .contains("6163096973 / 1096195000527")
      .should("not.exist");

    // Проверяем, что если несколько ИНН, то есть кнопка "Еще № налогоплательщика"
    cy.get("div[data-cy=taxpayer-table-row-more]")
      .contains("Еще 1 налогоплательщика")
      .should("exist")
      .click();

    // Проверяем, что если несколько ИНН развернуто, то есть кнопка "Свернуть"
    cy.get("div[data-cy=taxpayer-table-row-more]")
      .contains("Свернуть")
      .should("exist");

    // Проверяем наличие второй строки

    // Проверяем, что есть ИНН/ОГРН
    cy.get("h3[data-cy=taxpayer-value]")
      .contains("6163096973 / 1096195000527")
      .should("exist");

    // Проверяем, что есть статус
    cy.get("svg[data-cy=taxpayer-status-inactive]")
      .should("exist")
      .should("have.attr", "aria-label", "Ликвидированный");

    //Проверяем, что список можно свернуть обратно и будет одна запись
    // Сворачиваем список
    cy.get("div[data-cy=taxpayer-table-row-more]")
      .contains("Свернуть")
      .click();

    // Проверяем, что есть кнопка "Еще № налогоплательщика"
    cy.get("div[data-cy=taxpayer-table-row-more]")
      .contains("Еще 1 налогоплательщика")
      .should("exist")

    // Проверяем, что нет второго ИНН/ОГРН
    cy.get("h3[data-cy=taxpayer-value]")
      .contains("6163096973 / 1096195000527")
      .should("not.exist");
  });
});
