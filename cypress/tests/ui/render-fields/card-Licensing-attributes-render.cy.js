/// <reference types="cypress" />

context("Проверка владки 'Лицензирование'", () => {
  it("Проверяем наличие обязательных UI элементов на вкладке 'Лицензирование'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-contacts-attributes-render");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "Лицензирование"
    cy.get("button[id=Licensing]")
      .click();

    //Проверяем, что есть заголовок
    cy.get("h2[id=toolbar_title]")
      .should('contain', 'Лицензирование');

    //Получаем блок Подлежит лицензированию
    cy.get('div[id=grid_ToBeLicensing]')
      .within(() => {
        //Проверяем, что есть подпись блока
        cy.get('h3')
          .should('contain', 'Подлежит лицензированию');

        //Проверяем, что есть кнопка "Не предоставили" и она нажата
        cy.get('button[id=ToBeLicensing_btn_reject]')
          //Нужно добавить атрибут для селектора
          //.should("have.attr", "data-cy-checked", 'false')
          .parent()
          .within(() => {
            //Проверяем, что есть подпись "Не предоставили"
            cy.get('h3')
              .should('contain', 'Не предоставили')
          });

        //Проверяем, что для "Подлежит лицензированию" недоступен выбор значений
        cy.get('div[role=radiogroup]')
          .within(() => {
            cy.contains('span', 'Нет', { exact: true });
            cy.get('input[type=radio]')
              .eq(0)
              .should('be.disabled');

            cy.contains('span', 'Да', { exact: true });
            cy.get('input[type=radio]')
              .eq(1)
              .should('be.disabled');
          });
      });


    //Получаем блок Подтверждение лицензии
    cy.get('div[id=grid_RefToLicense]')
      .within(() => {
        //Проверяем, что есть подпись блока
        cy.get('h3')
          .should('contain', 'Подтверждение лицензии');


        //Проверяем, что есть кнопка "Не предоставили" и она нажата
        cy.get('button[id=RefToLicense_btn_reject]')
          .should("have.attr", "data-cy-checked", 'false')
          .parent()
          .within(() => {
            //Проверяем, что есть подпись "Не предоставили"
            cy.get('h3')
              .should('contain', 'Не предоставили')
          });

        //Проверяем, что для "Подтверждение лицензии" доступен выбор значений и выбрано одно значение
        cy.get('div[role=radiogroup]')
          .within(() => {
            cy.contains('span', 'В интернете', { exact: true });
            cy.get('input[type=radio]')
              .eq(0)
              .should('be.enabled');
            //Проверяем, что выбрано значение
            cy.get('input[type=radio]')
              .eq(0)
              .should('be.checked');

            cy.contains('span', 'Бумажное', { exact: true });
            cy.get('input[type=radio]')
              .eq(1)
              .should('be.enabled');
            //Проверяем, что выбрано не значение
            cy.get('input[type=radio]')
              .eq(1)
              .should('not.be.checked');

            cy.contains('span', 'Электронное', { exact: true });
            cy.get('input[type=radio]')
              .eq(2)
              .should('be.enabled');
            //Проверяем, что выбрано не значение
            cy.get('input[type=radio]')
              .eq(2)
              .should('not.be.checked');
          });

        cy.get('label[id=comment-label]')
          .should('contain', 'Комментарий');
        cy.get('input[id=comment]')
          .should('have.value', 'www.sgbank.ru/about/license/')
      });

    //Получаем блок Подтверждение свидетельства
    cy.get('div[id=grid_RefToСertificate]')
      .within(() => {
        //Проверяем, что есть подпись блока
        cy.get('h3')
          .should('contain', 'Подтверждение свидетельства');


        //Проверяем, что есть кнопка "Не предоставили" и она нажата
        cy.get('button[id=RefToСertificate_btn_reject]')
          .should("have.attr", "data-cy-checked", 'false')
          .parent()
          .within(() => {
            //Проверяем, что есть подпись "Не предоставили"
            cy.get('h3')
              .should('contain', 'Не предоставили')
          });

        //Проверяем, что для "Подтверждение свидетельства" доступен выбор значений и выбрано одно значение
        cy.get('div[role=radiogroup]')
          .within(() => {
            cy.contains('span', 'В интернете', { exact: true });
            cy.get('input[type=radio]')
              .eq(0)
              .should('be.enabled');
            //Проверяем, что выбрано значение
            cy.get('input[type=radio]')
              .eq(0)
              .should('be.checked');

            cy.contains('span', 'Бумажное', { exact: true });
            cy.get('input[type=radio]')
              .eq(1)
              .should('be.enabled');
            //Проверяем, что выбрано не значение
            cy.get('input[type=radio]')
              .eq(1)
              .should('not.be.checked');

            cy.contains('span', 'Электронное', { exact: true });
            cy.get('input[type=radio]')
              .eq(2)
              .should('be.enabled');
            //Проверяем, что выбрано не значение
            cy.get('input[type=radio]')
              .eq(2)
              .should('not.be.checked');
          });

        cy.get('label[id=comment-label]')
          .should('contain', 'Комментарий');
        cy.get('input[id=comment]')
          .should('have.value', 'огрн 1111690003853 сайт фнс')
      });

  });
});