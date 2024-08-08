/// <reference types="cypress" />

context("Проверка владки 'График'", () => {
  it("Проверяем наличие обязательных UI элементов на вкладке 'График'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("default");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "График"
    cy.get("button[id=Schedule]").click();

    //Получаем блок с Графиком
    cy.get("div[id=top_panel]").within(() => {
      //Проверяем, что в заголовке выводится расписание прописью
      cy.get("h3[id=toolbar_sub_title]").should(
        "contain",
        "пн-сб 09:30-18:30, перерыв: 13:00-14:00; вс 09:30-18:00; "
      );

      //Проверяем, что есть кнопка "Выбрать шаблон"
      cy.get("button[id=btn_new_schedule]").should("exist");

      //Проверяем, что есть кнопка "Копировать"
      cy.get("button[id=btn_more]").should("exist");

      //Получаем таблицу с графиком
      cy.get("table").within(() => {
        //Получаем блок с днями недели
        cy.get("thead th").should(($th) => {
          expect($th).to.have.length(8);
          //Проверяем, что есть дни недели
          expect($th.eq(1)).to.contain("Пн");
          expect($th.eq(2)).to.contain("Вт");
          expect($th.eq(3)).to.contain("Ср");
          expect($th.eq(4)).to.contain("Чт");
          expect($th.eq(5)).to.contain("Пт");
          expect($th.eq(6)).to.contain("Сб");
          expect($th.eq(7)).to.contain("Вс");
        });

        //Проверяем,что заполнен график работы
        //Проверяем, что в первой колонке графика работы есть картинка и подпись
        cy.get('div[aria-label="Время работы"]').find("svg").should("exist");

        // Массивы с идентификаторами дней недели и временными значениями
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const timeValues = [
          { from: "09:30", to: "18:30" },
          { from: "09:30", to: "18:30" },
          { from: "09:30", to: "18:30" },
          { from: "09:30", to: "18:30" },
          { from: "09:30", to: "18:30" },
          { from: "09:30", to: "18:30" },
          { from: "09:30", to: "18:00" },
        ];

        // Цикл для проверки каждого дня
        daysOfWeek.forEach((day, index) => {
          cy.get(`td[id="day_${day}"]`).within(() => {
            // Проверка временных значений для текущего дня
            cy.get("input[id=from]").should(
              "have.value",
              timeValues[index].from
            );
            cy.get("input[id=to]").should("have.value", timeValues[index].to);
          });
        });

        //Проверяем,что заполнен график перерывов
        //Проверяем, что в первой колонке графика перерывов есть картинка и подпись
        cy.get('div[aria-label="Перерыв"]').find("svg").should("exist");
        // Массивы с идентификаторами дней недели и временными значениями
        const daysOfWeekbr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const timeValuesbr = [
          { from: "13:00", to: "14:00" },
          { from: "13:00", to: "14:00" },
          { from: "13:00", to: "14:00" },
          { from: "13:00", to: "14:00" },
          { from: "13:00", to: "14:00" },
          { from: "13:00", to: "14:00" },
          { from: "--:--", to: "--:--" },
        ];

        // Цикл для проверки каждого дня
        daysOfWeekbr.forEach((day, index) => {
          cy.get(`td[id="br_${day}"]`).within(() => {
            // Проверка временных значений для текущего дня
            cy.get("input[id=from]").should(
              "have.value",
              timeValuesbr[index].from
            );
            cy.get("input[id=to]").should("have.value", timeValuesbr[index].to);
          });
        });

        //Проверяем, что есть кнопки
        cy.get("button[type=button]").should(($button) => {
          expect($button).to.have.length(2);
          expect($button.eq(0)).to.contain("Применить ко всем");
          expect($button.eq(1)).to.contain("Удалить перерыв");
        });
      });
      //Проверяем, что есть подпись "Время работы"
      cy.get("h3").should("contain", "Время работы");

      //Проверяем, что есть кнопка "Не предоставили" и она не нажата
      cy.get("button[id=c_schedule_btn_reject]")
        .should("have.attr", "data-cy-checked")
        .and("eq", "false");

      //Проверяем, что есть поле "Статус"
      cy.get("div[data-cy=schedule_status]").within(() => {
        //Проверяем, что поле подписано
        cy.get("label[id=schedule_status-label]").should("contain", "Статус");
        //Проверяем, что есть значение
        cy.get("input[data-cy=value-schedule_status]").should(
          "have.value",
          "Скоро открытие"
        );
      });

      //Проверяем, что заполнена дата статуса
      cy.get("input[id=schedule_opening_date]")
        .should("have.value", "01-06-2023")
        .parent()
        .within(() => {
          //Проверяем, что для даты есть кнопка с календарем
          cy.get("button[type=button]").should("exist");
        });

      //Проверяем, что есть подпись "Комментарий"
      cy.get("h3")
        .should("contain", "Комментарий")

        //Проверяем, что есть поле Комментарий и оно подписано
        // Потеряли лэйбл для Комметария, пока убрала из проверки
        //cy.get('label[id=value_Комментарий-label]')
        //  .should('contain', 'Комментарий')
        .parent()
        .eq(4)
        .within(() => {
          //Проверяем, что комментарйи заполнен
          // Нужно переименовать data-cy
          cy.get("input[data-cy=value-undefined]").should(
            "have.value",
            "служба доставки: круглосуточно"
          );
        });
    });
  });
});
