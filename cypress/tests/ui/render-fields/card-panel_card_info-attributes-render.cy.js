/// <reference types="cypress" />
const statusCardActive = Cypress.env("statusCardActive");
const Promotional = "M4 9.857L4 15 16 15 16 9.857 16 5 13 9 10 5 7 9 4 5z";
const loc_verification =
  "M70.75 7l.001 2.153c1.19.333 2.061 1.439 2.061 2.747 0 .627-.2 1.208-.54 1.68l1.131 3.17H75.5v1.5h-1.561l.892 2.498-1.412.504-1.073-3.002h-4.693l-1.072 3.002-1.412-.504.891-2.498H64.5v-1.5h2.096l1.132-3.17c-.309-.428-.502-.946-.535-1.507l-.005-.173c0-1.309.871-2.415 2.062-2.748V7h1.5zm.277 7.554c-.318.126-.664.196-1.027.196-.363 0-.709-.07-1.027-.196l-.784 2.196h3.621zM70 10.55c-.722 0-1.313.601-1.313 1.35 0 .749.591 1.35 1.313 1.35s1.313-.601 1.313-1.35c0-.749-.591-1.35-1.313-1.35z";

context("Проверка отображения информации по фирме в левой панели", () => {
  it("Проверяем что есть 'Гибрид', 'Отелло','Название','Контакт', 'Статус карточки', 'Фидовость', 'Рекламность', 'Даты взаимодействия с карточкой', 'Проектная информация'", () => {
    //Включаем проверку Гибрида
    cy.intercept("GET", `/api/configuration`, {
      statusCode: 200,
      body: {
        api_url: "https://localhost:44369",
        adfs_url: "https://intadfstest.2gis.one/",
        ga_tracking_code: null,
        log_rocket_app_id: null,
        skips_blocked: true,
        enable_hybrids: true,
        enable_hybrids_destruction_check: true,
      },
    });

    // выбираем коллекцию моков
    cy.mocksSetCollection("card-contacts-attributes-render");

    //Говорим, что карточка Гибридная
    cy.intercept("GET", `/api/Hybrid/check/1`, { body: true });

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Получаем всю левую панель
    cy.get("div[id=panel_card_info]").within(() => {
      //Проверяем, что есть лэйблы "Гибрид" и "Отелло"
      cy.get("h6").then(($h6) => {
        expect($h6.eq(0)).to.have.text("Гибрид");
        expect($h6.eq(1)).to.have.text("Отелло");
      });

      //Проверяем, что у лэйблов правильный фон
      cy.get("h6").each(($h6, index) => {
        cy.wrap($h6.parents().eq(0)).should(($parent) => {
          if (index === 0) {
            expect($parent).to.have.css(
              "background-color",
              "rgba(240, 188, 0, 0.2)"
            );
          } else if (index === 1) {
            expect($parent).to.have.css(
              "background-color",
              "rgba(40, 127, 252, 0.1)"
            );
          }
        });
      });

      //Проверяем, что есть наименование карточки
      cy.get("h2[id=txt_name]").should(
        "have.text",
        "Электростандарт, магазин светотехники, ООО Медведевых Е.В., официальный представитель Werkel, Elektrostandard"
      );

      //Проверяем, что есть адрес карточки и контакт
      cy.get("h3").should(($h3) => {
        expect($h3.eq(0)).to.have.text(
          "Чита г. (Чита городской округ, Забайкальский край, Россия), Вокзальная, 3 лит А"
        );
        expect($h3.eq(1)).to.have.text("+7 302 270 41 17");
      });

      //Проверяем, что есть статус карточки
      cy.contains("h5", "Сверена", { exact: true })
        .parents()
        .eq(1)
        .should("have.css", "background-color", "rgba(88, 166, 0, 0.2)")
        .within(() => {
          cy.get("svg").find("path").should("have.attr", "d", statusCardActive);
          cy.get("h5").eq(1).should("have.text", "Действующая");
        });

      //Проверяем, что есть отображение фидовости карточки
      cy.contains("h5", /^Карточка обновляется фидом.+/, { exact: true })
        .parents()
        .eq(0)
        .should("have.css", "background-color", "rgb(242, 243, 245)");

      //Проверяем, что есть рекламность карточки
      cy.contains("h5", "Рекламная", { exact: true })
        .parents()
        .eq(0)
        .should("have.css", "background-color", "rgba(240, 188, 0, 0.2)")
        .within(() => {
          cy.get("svg").find("path").should("have.attr", "d", Promotional);
        });

      //Проверяем, что есть информация о Кураторе и периоде рекламы
      cy.contains("h6", "Куратор", { exact: true })
        .parents()
        .eq(1)
        .within(() => {
          cy.get("h3").should("have.text", "a.baranchuk");
          cy.get("h6").should(($h6) => {
            expect($h6.eq(1)).to.have.text("с 01 янв. 2023");
            expect($h6.eq(2)).to.have.text("по 01 июля 2023");
          });
        });

      //Проверяем, что есть Даты взаимодействия с карточкой, Проектная информация и Партнер
      cy.get("div[data-cy=all-card-info]").within(() => {
        cy.get("h6").should(($h6) => {
          expect($h6.eq(0)).to.have.text("Создана");
          expect($h6.eq(1)).to.have.text("03 апр. 2012");
          expect($h6.eq(2)).to.have.text("Сверена");
          expect($h6.eq(3)).to.have.text("06 апр. 2023");
          expect($h6.eq(4)).to.have.text("Изменена");
          expect($h6.eq(5)).to.have.text("19 апр. 2023");
          expect($h6.eq(6)).to.have.text("Проект сверки");
          expect($h6.eq(7)).to.have.text("Проект публикации");
          expect($h6.eq(8)).to.to.exist; //have.text('00:58') надо посмотреть как можно завизаться на время
          expect($h6.eq(9)).to.have.text("Партнеры");
        });

        cy.get("h3").should(($h3) => {
          expect($h3.eq(0)).to.have.text("Бывший сотрудник 2ГИС");
          expect($h3.eq(1)).to.have.text("Перепелко Игорь Андреевич");
          expect($h3.eq(2)).to.have.text("Короткова Влада Валерьевна");
          expect($h3.eq(3)).to.have.text("Чита");
          expect($h3.eq(4)).to.have.text("Чита");
          expect($h3.eq(5)).to.have.text("2ГИС");
        });
      });

      //Проверяем, что есть блок История изменений
      cy.contains("h5", "История изменений", { exact: true })
        .parents()
        .eq(1)
        .should("have.css", "color", "rgb(128, 128, 128)")
        .and("be.visible");
    });
  });

  it("Проверяем что есть отображение статуса, 'причина скрытия','Согласие на обработку персональных данных', Выверка на местности', 'Горячий клиент'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-panel_card_onfo-attributes-render-GDPR");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Получаем всю левую панель
    cy.get("div[id=panel_card_info]").within(() => {
      //Проверяем, что есть статус карточки
      cy.contains("h5", "В плане", { exact: true })
        .parents()
        .eq(1)
        .should("have.css", "background-color", "rgb(242, 243, 245)")
        .within(() => {
          cy.get("svg").find("path").should("have.attr", "d", statusCardActive);
          cy.get("h5").eq(1).should("have.text", "Скрытая");
        });
      /*
      //Проверяем, что есть Партнер
      cy.get("h6").eq(9).should("have.text", "Партнеры");
      */

      //Проверяем, что есть причина скрытия
      cy.get("h6")
        .eq(10)
        .should("have.text", "Отсутствие разрешающего документа");

      //Проверяем, что есть отображение Согласие на обработку персональных данных
      cy.contains("h5", "Согласие на обработку персональных данных : Да", {
        exact: true,
      })
        .parents()
        .eq(0)
        .should("have.css", "background-color", "rgb(242, 243, 245)");

      cy.get("div[id=send_gdpr_request]")
        .should("have.css", "background-color", "rgb(242, 243, 245)")
        .and("have.text", "Запросить согласие в ЛК")
        .should("be.visible")
        .click()
        .should("have.css", "background-color", "rgba(146, 68, 231, 0.1)");

      //Проверяем, что есть Выверка на местности
      cy.get("div[id=loc_verification]")
        .should("have.css", "color", "rgb(128, 128, 128)")
        .within(() => {
          cy.get("svg").find("path").should("have.attr", "d", loc_verification);
          cy.get("h5").should("have.text", "Выверка на местности");
        })
        .should("be.visible")
        .click()
        .should("have.css", "color", "rgb(146, 68, 231)");

      //Проверяем, что есть отображение Горячий клиент
      cy.contains("h5", "Горячий клиент", { exact: true })
        .parents()
        .eq(0)
        .should("have.css", "background-color", "rgb(242, 243, 245)")
        .click();
    });

    //Проверяем, что после клика на "Горячий клиент" появилось диалоговое окно
    cy.get("div[role=dialog]").should("exist");
  });
});
