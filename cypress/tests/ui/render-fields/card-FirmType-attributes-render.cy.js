/// <reference types="cypress" />

context("Проверка владки 'Тип'", () => {
  describe("Проверяем наличие обязательных UI элементов на вкладке 'Тип'", () => {
    it("Проверяем все поля для карточки в которой есть эта вкладка", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-contacts-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Тип"
      cy.get("button[id=FirmType]")
        .click();

      //Получаем блок с оплатой
      cy.get("div[id=current_panel]")
        .within(() => {
          //Проверяем, что есть заголовок
          cy.get('h2[data-cy=toolbar-title]')
            .should('contain', 'Тип предприятия');
          //Получаем блок со способами оплаты
          cy.get('div[data-cy=root-checkboxes-business_type_new]')
            .within(() => {
              //Проверяем, что есть заголовок
              cy.get('h3[data-cy=caption]')
                .should('contain', 'Тип предприятия')

              //Проверяем, что есть кнопка "Не предоставили" и она не нажата
              cy.get('button[id=business_type_new_btn_reject]')
                .should("have.attr", "data-cy-checked", 'false')
                .parent()
                .within(() => {
                  //Проверяем, что есть подпись "Не предоставили"
                  cy.get('h3')
                    .should('contain', 'Не предоставили')
                });

              //Проверяем, что есть чек-бокс Выбрать все и он не нажат
              cy.contains('span', 'Выбрать всё', { exact: true })
                .parent()
                .within(() => {
                  cy.get('input[type="checkbox"]')
                    .should('not.be.checked')
                });

              //Получаем блок с вариантами оплаты
              cy.get('div[data-cy=checkboxes-container]')
                .within(() => {
                  // Массивы с идентификаторами типа предприятия, названий типов и остояний (не)выбрано
                  const business_type = ['98896_control', '98897_control', '98898_control', '98899_control'];
                  const business_typeContain = ['Интернет-магазин', 'Розница', 'Опт', 'Производство'];
                  const business_typeCheck = ['not.be.checked', 'be.checked', 'not.be.checked', 'not.be.checked'];

                  // Цикл для проверки каждого типа предприятия
                  business_type.forEach((type, index) => {
                    cy.get(`label[data-cy="business_type_new_${type}"]`)
                      .within(() => {
                        // Проверка состояния чек-бокса
                        cy.contains('span', business_typeContain[index]);
                        cy.get('input[type="checkbox"]')
                          .should(business_typeCheck[index]);
                      });
                  });
                });
            });
        });
    });

    it("Проверяем что вкладки нет, если нет подходящей рубрики", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("default");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Тип"
      cy.get("button[id=FirmType]")
        .should('not.exist');
    });
  });
});