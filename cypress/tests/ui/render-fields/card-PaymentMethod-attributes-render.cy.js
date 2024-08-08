/// <reference types="cypress" />

context("Проверка владки 'Способ оплаты'", () => {
  it("Проверяем наличие обязательных UI элементов на вкладке 'Способ оплаты'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-contacts-attributes-render");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "Способ оплаты"
    cy.get("button[id=PaymentMethod]")
      .click();

    //Получаем блок с оплатой
    cy.get("div[id=current_panel]")
      .within(() => {
        //Проверяем, что есть кнопка "Справка по блоку"
        cy.get('button[id=btn_info]')
          .should('exist');
        //Проверяем, что есть заголовок
        cy.get('h2[data-cy=toolbar-title]')
          .should('contain', 'Способы оплаты');
        //Получаем блок со способами оплаты
        cy.get('div[data-cy=root-checkboxes-PaymentMethod]')
          .within(() => {
            //Проверяем, что есть заголовок
            cy.get('h3[data-cy=caption]')
              .should('contain', 'Способы оплат')

            //Проверяем, что есть кнопка "Не предоставили" и она не нажата
            cy.get('button[id=PaymentMethod_btn_reject]')
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
                // Массивы с идентификаторами способов оплаты, названий способов оплаты и остояний (не)выбрано
                const PaymentMethod = ['1_control', '101021_control', '101648_control', '6_control', '7_control', '91380_control'];
                const PaymentMethodContain = ['Наличный расчёт', 'Перевод с карты', 'Оплата по QR-коду', 'Оплата эл. кошельком', 'Оплата через банк', 'Оплата картой через терминал'];
                const PaymentMethodCheck = ['be.checked', 'be.checked', 'not.be.checked', 'not.be.checked', 'be.checked', 'be.checked'];

                // Цикл для проверки каждого способа оплаты
                PaymentMethod.forEach((Method, index) => {
                  cy.get(`label[data-cy="PaymentMethod_${Method}"]`)
                    .within(() => {
                      // Проверка временных значений для текущего дня
                      cy.contains('span', PaymentMethodContain[index]);
                      cy.get('input[type="checkbox"]')
                        .should(PaymentMethodCheck[index]);
                    });
                });
              });
          });
      });
  });
});