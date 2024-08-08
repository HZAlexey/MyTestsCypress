/// <reference types="cypress" />

context("Проверка владки 'ДА'", () => {
  describe("Проверяем наличие обязательных UI элементов на вкладке 'ДА'", () => {
    it("Проверяем все типы ДА", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-contacts-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "ДА"
      cy.get("button[id=AdditionalAttributes]")
        .click();

      //------------Проверяем тип ДА = BooleanRadio
      cy.get("div[id=Lunch]")
        .within(() => {
          //Проверяем, что "Да" выбрано
          cy.get('label[id="True"]')
            .should('contain', 'Да')
            .find('span')
            .should("have.attr", "class")
            .and('match', /checked/);
          //Проверяем, что "Нет" не выбрано
          cy.get('label[id="False"]')
            .should('contain', 'Нет')
            .find('span')
            .should("have.attr", "class")
            .and('not.match', /checked/);
          //Проверяем, что есть кнопка "Не предоставили"
          cy.get('button[id="Lunch_btn_reject"]')
            .should('exist')
            .parent()
            .should('contain', 'Не предоставили')
        });

      //------------Проверяем тип ДА = Text
      cy.get("div[data-cy=free_parking]")
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=value-label]')
            .should('contain', 'Время бесплатной стоянки');
          //Проверяем, что заполнено значение
          cy.get('input[data-cy=value-free_parking]')
            .should('have.value', '123');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id="free_parking_btn_reject"]')
            .should("have.attr", "data-cy-checked")
            .and('eq', 'false')
        });

      //------------Проверяем тип ДА = Int64
      cy.get("div[data-cy=cost_parking_hour]")
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=value-label]')
            .should('contain', 'Стоимость парковки для легкового автомобиля в час');
          //Проверяем, что заполнено значение
          cy.get('input[data-cy=value-cost_parking_hour]')
            .should('have.value', '120');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id="cost_parking_hour_btn_reject"]')
            .should("have.attr", "data-cy-checked")
            .and('eq', 'false')
        });

      //------------Проверяем тип ДА = RangeTime
      cy.get('div[data-cy=root-range-field-businesslunch_time]')
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=from-label]')
            .should('contain', 'Время бизнес-ланча от');

          //Проверяем, что заполнено значение от
          cy.get('input[id=from]')
            .should('have.attr', 'type', 'time')
            .and('have.value', '11:00');

          //Проверяем, что заполнено значение до
          cy.get('input[id=to]')
            .should('have.attr', 'type', 'time')
            .and('have.value', '15:00');

          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id="businesslunch_time_btn_reject"]')
            .should("have.attr", "data-cy-checked")
            .and('eq', 'false')
        });

      //Пришлось добираться черт и как до него
      //Проверяем, что атрибут подписан
      /*
      cy.get('label[id=from-label]')
        .should('contain', 'Время бизнес-ланча от')
        .parent()
        .parent()
        .first()
        .within(() => {
          //Проверяем, что заполнено значение от
          cy.get('input[id=from]')
            .should('have.attr', 'type', 'time')
            .and('have.value', '11:00');
          //Проверяем, что заполнено значение до
          cy.get('input[id=to]')
            .should('have.attr', 'type', 'time')
            .and('have.value', '15:00');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id="businesslunch_time_btn_reject"]')
            .find('svg')
            .should("have.attr", "class")
            .and('match', /activeButton/)
        });
       */

      //------------Проверяем тип ДА = ListRadioButton
      //Проверяем, что атрибут подписан
      cy.get('div[id=grid_foodservice_bar_type]')
        .within(() => {
          //Проверяем, что заполнено значение
          cy.get('h3')
            .should('contain', 'Вид заведения');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id=foodservice_bar_type_btn_reject]')
            .should("have.attr", "data-cy-checked", 'false');
          //Проверяем, что есть кнопка "Нет подходящего" и она не нажата
          cy.get('button[id=foodservice_bar_type_btn_not_allowed]')
            .should("have.attr", "data-cy-checked", 'false');
          //Проверяем, что есть выбранное значение
          cy.get('div[role=radiogroup]')
            .should('contain', 'Бургерные');
        });

      //------------Проверяем тип ДА = ListCheckBox
      cy.get('div[data-cy=root-checkboxes-cocktail_bars_types]')
        .within(() => {
          cy.get('h3[data-cy=caption]').should('contain', 'Виды напитков');

          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id=cocktail_bars_types_btn_reject]')
            .should("have.attr", "data-cy-checked", 'false');

          //Проверяем, что есть кнопка "Нет подходящего" и она не нажата
          cy.get('button[id=cocktail_bars_types_btn_not_allowed]')
            .should("have.attr", "data-cy-checked", 'false');

          //Проверяем, что есть выбранное значение
          cy.get('div[data-cy=checkboxes-container]')
            .within(() => {
              cy.get('label[data-cy=cocktail_bars_types_101834_control]')
                .within(() => {
                  cy.get('span')
                    .should('contain', 'Глинтвейн');

                  cy.get('input[id=cocktail_bars_types_101834]')
                    .should('have.attr', 'data-cy-checked', 'true');
                });
            })
        });

      //------------Проверяем тип ДА = ListComboBox
      //Находим атрибут
      cy.get('div[data-cy=HotelRating]')
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=HotelRating-label]')
            .should('contain', 'Количество звёзд');

          //Проверяем, что заполнено значение
          cy.get('input[data-cy=value-HotelRating]')
            .should("have.attr", 'value', '5');

          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[data-cy=HotelRating_btn_reject]')
            .should("have.attr", "data-cy-checked", 'false');

          //Проверяем, что есть кнопка "Нет подходящего значения" и она не нажата
          cy.get('button[data-cy=HotelRating_btn_no_suitable]')
            .should("have.attr", "data-cy-checked", 'false');
        });

      //------------Проверяем тип ДА = Decimal
      //Находим атрибут
      cy.get('div[data-cy=tubing_price]')
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=value-label]')
            .should('contain', 'Стоимость проката тюбинга');
          //Проверяем, что заполнено значение
          cy.get('input[data-cy=value-tubing_price]')
            .should("have.value", '200.00');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id=tubing_price_btn_reject]')
            .should("have.attr", "data-cy-checked", 'false');
        });


      //------------Проверяем тип ДА = TextRangeInt64
      //Находим атрибут
      cy.get('div[data-cy=sauna_hour_price]')
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=value-label]')
            .should('contain', 'Стоимость часа');
          //Проверяем, что заполнено значение
          cy.get('input[data-cy=value-sauna_hour_price]')
            .should("have.value", '1000');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id=sauna_hour_price_btn_reject]')
            .should("have.attr", "data-cy-checked", 'false');
        });

      //------------Проверяем тип ДА = ListTagsBox
      //Находим атрибут
      cy.get('div[data-cy=foodservice_food]')
        .within(() => {
          //Проверяем, что атрибут подписан
          cy.get('label[id=foodservice_food-label]')
            .should('contain', 'Кухня')

          //Этаж выбран
          cy.get("div[role=button]")
            .as('foodButtons');
          cy.get('@foodButtons')
            .should('have.length', 1);
          cy.get('@foodButtons')
            .contains('span', 'Авторская кухня')
            .should('exist');
          //Проверяем, что есть кнопка "Не предоставили" и она не нажата
          cy.get('button[id=foodservice_food_btn_reject]')
            .should("have.attr", "data-cy-checked", 'false');
          //Проверяем, что есть кнопка "Нет подходящего значения" и она не нажата
          //Надо бы поменять id для него
          cy.get('button[aria-label="Нет подходящего значения"]')
            .should("have.attr", "data-cy-checked", 'false');
        });
    });
  });
});
