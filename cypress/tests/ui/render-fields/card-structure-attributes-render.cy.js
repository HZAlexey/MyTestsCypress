/// <reference types="cypress" />
const statusCardActive = Cypress.env("statusCardActive");
const statusCardHide =
  "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z";
const statusCardArchive =
  "m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z";
const addressHasFloors =
  "M15 2c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h10zm-1 10H6v2h8v-2zm0-4H6v2h8V8zm0-4H6v2h8V4z";
const addressHasContact =
  "M16.667 12.917c-1.042 0-2.042-.167-2.975-.475-.292-.092-.617-.025-.85.2l-1.834 1.833c-2.358-1.2-4.291-3.125-5.491-5.492L7.35 7.142c.233-.217.3-.542.208-.834-.308-.933-.475-1.933-.475-2.975 0-.458-.375-.833-.833-.833H3.333c-.458 0-.833.375-.833.833C2.5 11.158 8.842 17.5 16.667 17.5c.458 0 .833-.375.833-.833V13.75c0-.458-.375-.833-.833-.833zM17.5 5H15V2.5h-1.667V5h-2.5v1.667h2.5v2.5H15v-2.5h2.5V5z";
const structureSearchResult = [
  {
    card_code: "9007727535735748",
    status: "Planned",
    hidden: true,
    territory: "Чита г. (Чита городской округ, Забайкальский край, Россия)",
    name: "Вокзальная, 3 лит А",
    dep_number: "0",
    is_dep: false,
    has_contacts_for_verification: false,
    has_production_floors: true,
    has_errors: false,
    without_phones: false,
    order_no: 1,
    processed_date_utc: "2022-12-02T10:09:27.747",
  },
  {
    card_code: "70000001025138009",
    status: "Processed",
    hidden: false,
    territory: "Чита г. (Чита городской округ, Забайкальский край, Россия)",
    name: "Вокзальная, 3 лит А",
    dep_number: "0",
    is_dep: false,
    has_contacts_for_verification: false,
    has_production_floors: true,
    has_errors: false,
    without_phones: false,
    order_no: 0,
    processed_date_utc: "2023-04-06T05:49:46.11",
  },
];

context("Проверка правой панели с Орг.структурой", () => {
  describe("Проверяем наличие обязательных UI элементов в Орг.структуре", () => {
    it("открытие через /card", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-structure-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Получаем всю правую панель
      cy.get("button[id=tab_firm_structure]").parents().eq(4).as("Right_Panel");

      cy.get("@Right_Panel").within(() => {
        cy.get("div[role=tablist]")
          .find("button")
          .should(($button) => {
            expect($button).to.have.length(3);
            //Проверяем, что есть три вкладки в порядке Орг.структура, Комментарии, Зацепки
            expect($button.eq(0)).to.have.attr("id", "tab_firm_structure");
            expect($button.eq(1)).to.have.attr("id", "tab_vorwand_1");
            expect($button.eq(2)).to.have.attr("id", "tab_quality_1");
          });
        //Проверяем, что для Орг.структуры есть подпись и указано кол-во действующих карточек
        cy.get("button[id=tab_firm_structure]").within(() => {
          cy.get("span[id=firm_structure_items_count]")
            //Проверяем, что есть подпись
            .should("have.attr", "aria-label", "Орг. структура")
            //Проверяем, что есть кол-во действующих карточек
            .and("have.text", "2");
        });

        //Получаем панель с орг.структурой
        cy.get("div[id=pn_firm_structure]").within(() => {
          //Проверяем, что есть кнопка "Создать карточку" и одна доступна
          cy.get("button[id=new_card_button]")
            .should("have.text", "Создать карточку")
            .and("be.enabled");

          //Проверяем, что есть группировка по статусу "Действующие" и "Скрытые"
          cy.get("div[data-test-id=virtuoso-scroller]").within(() => {
            cy.get("div[data-test-id=virtuoso-top-item-list]")
              .find("span")
              .should("contain", "Действующие");
            cy.get("div[data-test-id=virtuoso-item-list]")
              .find("span")
              .should("contain", "Скрытые");
          });

          //Проверяем отображение информации по карточкам фирмы
          cy.get("div[data-test-id=virtuoso-item-list]").within(() => {
            // Массивы с идентификаторами адресов
            const StatustCHek = [
              "exist",
              "exist",
              "exist",
              "not.exist",
              "exist",
            ];
            const Status = [
              statusCardActive,
              statusCardActive,
              statusCardHide,
              null,
              statusCardArchive,
            ];
            const Address = [
              "Вокзальная, 2 лит А",
              "Объездное шоссе, 24а ст5",
              "Вокзальная, 3 лит А",
              "Большой Ундугун, 1",
              "Объездное шоссе, 24а ст2",
            ];
            const AdditionIconCheck = [
              "exist",
              "exist",
              "exist",
              "not.exist",
              "not.exist",
            ];
            const AdditionIcon = [
              addressHasFloors,
              addressHasContact,
              addressHasFloors,
              null,
              null,
            ];

            // Цикл для проверки каждого
            cy.get(`div[id="firm_row"]`).each(($div, index) => {
              cy.wrap($div).within(() => {
                //Проверка, что есть чек-бокс для каждого адреса
                cy.get('input[type="checkbox"]')
                  .should("not.be.checked")
                  .and("be.enabled");

                //Проверяем, что есть иконка отображения статуса
                if (StatustCHek[index] !== "not.exist") {
                  cy.get("svg")
                    .eq(1)
                    .find("path")
                    .should("have.attr", "d", Status[index]);
                }

                // Проверка что есть адрес
                if (Address[index] !== null) {
                  cy.contains("h3", Address[index]);
                }

                //Проверяем, что есть конока "В здании с этажами" и "Есть контакт для верки"
                if (AdditionIconCheck[index] !== "not.exist") {
                  cy.get("svg")
                    .eq(2)
                    .find("path")
                    .should("have.attr", "d", AdditionIcon[index]);
                }

                //Проверка, что меню есть для всех записей
                cy.get("div[id=firm_actions_cell]")
                  .find("button")
                  .should("be.enabled");
              });
            });
          });

          //Проверяем, что есть кнопка "Применить" и она недоступна если не выбраны чек-боксы
          cy.get("button[id=btn_apply]")
            .should("have.text", "Применить")
            .and("not.be.enabled");

          cy.get('div[id="firm_row"]')
            .first()
            .within(() => {
              //Нажимаем на чек-бокс
              cy.get('input[type="checkbox"]').check();
            });

          //Проверяем, что кнопка "Применить" стала доступна если выбран чек-боксы
          cy.get("button[id=btn_apply]")
            .should("have.text", "Применить")
            .and("be.enabled");

          //Проверяем, что есть Поиск по адресу и он доступен
          cy.get('input[placeholder="Поиск по адресу"]').and("be.enabled");
          cy.get(`div[id="firm_row"]`).should("have.length", 5);

          cy.intercept(
            "GET",
            "/api/cards/structure/*/*",
            structureSearchResult
          );

          cy.get('input[placeholder="Поиск по адресу"]').type("Вокзальная", {
            force: true,
          });

          //Проверяем, что результаты обновились
          cy.get(`div[id="firm_row"]`).should("have.length", 2);
        });
      });
    });

    it("открытие через /task", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-structure-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/task/1");

      //Получаем всю правую панель
      cy.get("button[id=tab_firm_structure]")
        .click()
        .parents()
        .eq(4)
        .as("Right_Panel");

      cy.get("@Right_Panel").within(() => {
        cy.get("div[role=tablist]")
          .find("button")
          .should(($button) => {
            expect($button).to.have.length(3);
            //Проверяем, что есть три вкладки в порядке Орг.структура, Комментарии, Зацепки
            expect($button.eq(0)).to.have.attr("id", "tab_vorwand_1");
            expect($button.eq(1)).to.have.attr("id", "tab_firm_structure");
            expect($button.eq(2)).to.have.attr("id", "tab_quality_1");
          });
        //Проверяем, что для Орг.структуры есть подпись и указано кол-во действующих карточек
        cy.get("button[id=tab_firm_structure]").within(() => {
          cy.get("span[id=firm_structure_items_count]")
            //Проверяем, что есть кол-во действующих карточек
            .should("have.text", "2");
        });

        //Получаем панель с орг.структурой
        cy.get("div[id=pn_firm_structure]").within(() => {
          //Проверяем, что есть кнопка "Создать карточку" и одна доступна
          cy.get("button[id=new_card_button]")
            .should("have.text", "Создать карточку")
            .and("be.enabled");

          //Проверяем, что есть группировка по району
          cy.get("div[data-test-id=virtuoso-scroller]").within(() => {
            cy.get("div[data-test-id=virtuoso-top-item-list]")
              .find("span")
              .should(
                "contain",
                "Чита г. (Чита городской округ, Забайкальский край, Россия)"
              );
            cy.get("div[data-test-id=virtuoso-item-list]")
              .find("span")
              .should(
                "contain",
                "Читинский район (Забайкальский край, Россия)"
              );
          });

          //Проверяем отображение информации по карточкам фирмы
          cy.get("div[data-test-id=virtuoso-item-list]").within(() => {
            // Массивы с идентификаторами адресов
            const StatustCHek = [
              "exist",
              "exist",
              "exist",
              "exist",
              "not.exist",
            ];
            const Status = [
              statusCardActive,
              statusCardActive,
              statusCardHide,
              statusCardArchive,
              null,
            ];
            const Address = [
              "Вокзальная, 2 лит А",
              "Объездное шоссе, 24а ст5",
              "Вокзальная, 3 лит А",
              "Объездное шоссе, 24а ст2",
              "Большой Ундугун, 1",
            ];
            const AdditionIconCheck = [
              "exist",
              "exist",
              "exist",
              "not.exist",
              "not.exist",
            ];
            const AdditionIcon = [
              addressHasFloors,
              addressHasContact,
              addressHasFloors,
              null,
              null,
            ];

            // Цикл для проверки каждого
            cy.get(`div[id="firm_row"]`).each(($div, index) => {
              cy.wrap($div).within(() => {
                //Проверка, что есть НЕ чек-бокс для каждого адреса
                cy.get('input[type="checkbox"]').should("not.exist");

                //Проверяем, что есть иконка отображения статуса
                if (StatustCHek[index] !== "not.exist") {
                  cy.get("svg")
                    .eq(0)
                    .find("path")
                    .should("have.attr", "d", Status[index]);
                }

                // Проверка что есть адрес
                if (Address[index] !== null) {
                  cy.contains("h3", Address[index]);
                }

                //Проверяем, что есть конока "В здании с этажами" и "Есть контакт для верки"
                if (AdditionIconCheck[index] !== "not.exist") {
                  cy.get("svg")
                    .eq(1)
                    .find("path")
                    .should("have.attr", "d", AdditionIcon[index]);
                }

                //Проверка, что меню есть для всех записей
                cy.get("div[id=firm_actions_cell]")
                  .find("button")
                  .should("be.enabled");
              });
            });
          });

          //Проверяем, что Нет кнопки "Применить"
          cy.get("button[id=btn_apply]").should("not.be.exist");

          //Проверяем, что есть Поиск по адресу и он доступен
          cy.get('input[placeholder="Поиск по адресу"]').and("be.enabled");
          cy.get(`div[id="firm_row"]`).should("have.length", 5);

          cy.intercept(
            "GET",
            "/api/cards/structure/*/*",
            structureSearchResult
          );

          cy.get('input[placeholder="Поиск по адресу"]').type("Вокзальная", {
            force: true,
          });

          //Проверяем, что результаты обновились
          cy.get(`div[id="firm_row"]`).should("have.length", 2);
        });
      });
    });
  });
});
