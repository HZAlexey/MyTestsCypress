/// <reference types="cypress" />

context("Проверка владки 'Язык'", () => {
  it("Проверяем наличие обязательных UI элементов на вкладке 'Язык'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-contacts-attributes-render");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "Язык"
    cy.get("button[id=ServiceLanguage]")
      .click();

    //Проверяем, что есть заголовок
    cy.get("h2[id=toolbar_title]")
      .should('contain', 'Язык обслуживани');

    //Получаем поле Язык обслуживания
    cy.get('div[data-cy=ServiceLanguage]')
      .within(() => {
        cy.get('label[id=ServiceLanguage-label]')
          //Проверяем, что поле подписано
          .should('contain', 'Язык обслуживания');

        //Проверяем, что указано неколько значений
        cy.get("div[role=button]")
          .as('LanguageButtons');

        cy.get('@LanguageButtons')
        //Долждно быть 2 языка
          .should('have.length', 2);
        cy.get('@LanguageButtons')
          .filter(':contains("Английский")')
          .should('exist');

        cy.get('@LanguageButtons')
          .filter(':contains("Китайский")')
          .should('exist');

        //Проверяем, что поле доступно для редактирования
        cy.get('input[type=text]')
          .should('be.enabled');

        //Проверяем, что есть кнопка Отказались предоставить информацию, она не нажата и дотупна для редактирования
        cy.get('button[data-cy=ServiceLanguage_btn_reject]')
          .should("have.attr", "data-cy-checked", 'false')
          .and('be.enabled')
          .parent()
          //Проверяем, что есть подпись для кнопки
          .should('have.attr', 'aria-label', 'Отказались предоставить информацию');
      });
  });
});
