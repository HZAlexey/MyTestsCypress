/// <reference types="cypress" />

context("Проверка владки 'О фирме'", () => {
  it("Проверяем наличие обязательных UI элементов на вкладке 'О фирме'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("default");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "О фирме"
    cy.get("button[id=OrganizationData]").click();

    //Проверяем, что есть заголовок
    cy.get("h2[id=toolbar_title]").should("contain", "О фирме");

    //Проверяем  поле Дата открытия
    cy.get("div[data-cy=OpeningDate]").within(() => {
      cy.get("label[id=value-label]")
        //Проверяем, что поле подписано
        .should("contain", "Дата открытия")
        .parent()
        .then(($parent) => {
          cy.wrap($parent)
            .find("input[id=value]")
            //Проверяем, что указано значение
            .should("have.value", "01-02-2023")
            .and("be.enabled");

          cy.wrap($parent)
            .find("button")
            //Проверяем, что есть кнопки календаря и отказа о предоставлении информации
            .should("exist");

          cy.get("button[data-cy=OpeningDate_btn_reject]")
            //Проверяем, что Отказаличь предоставить информацию не выбрано
            .should("have.attr", "data-cy-checked", "false")
            .and("be.enabled")
            .parent()
            //Проверяем, что есть подпись для кнопки
            .should(
              "have.attr",
              "aria-label",
              "Отказались предоставить информацию"
            );
        });
    });

    //Проверяем  поле Количество сотрудников
    cy.get("div[data-cy=NumberOfEmployees]").within(() => {
      cy.get("label[id=NumberOfEmployees-label]")
        //Проверяем, что поле подписано
        .should("contain", "Количество сотрудников");

      cy.get("input[data-cy=value-NumberOfEmployees]").should(
        "have.value",
        "до 15"
      );

      cy.get("input[type=text]").should("be.enabled");

      cy.get("button[data-cy=NumberOfEmployees_btn_reject]")
        .should("have.attr", "data-cy-checked", "false")
        .and("be.enabled")
        .parent()
        //Проверяем, что есть подпись для кнопки
        .should(
          "have.attr",
          "aria-label",
          "Отказались предоставить информацию"
        );
    });

    //Проверяем блок Региональный клиент
    cy.get("div[id=RegionalClient]").within(() => {
      cy.get("h3")
        //Проверяем, что блок подписан
        .should("contain", "Региональный клиент");

      //Проверяем, что для "Региональный клиент" доступен выбор значений и выбрано одно значение
      cy.get("div[role=radiogroup]").within(() => {
        cy.get("label[id=True]").should("contain", "Да", { exact: true });

        cy.get("input[type=radio]").eq(0).should("be.enabled");

        //Проверяем, что выбрано значение
        cy.get("input[type=radio]").eq(0).should("be.checked");

        cy.get("label[id=False]").should("contain", "Нет", { exact: true });

        cy.get("input[type=radio]").eq(1).should("be.enabled");

        //Проверяем, что выбрано не значение
        cy.get("input[type=radio]").eq(1).should("not.be.checked");
      });

      //Проверяем, что есть кнопка "Не предоставили" и она нажата
      cy.get("button[id=RegionalClient_btn_reject]")
        .should("have.attr", "data-cy-checked", "false")
        .and("be.enabled")
        .parent()
        .within(() => {
          //Проверяем, что есть подпись "Не предоставили"
          cy.get("h3").should("contain", "Не предоставили");
        });

      //Проверяем поле Комментарий
      cy.get("label[id=comment-label]")
        //Проверяем, что поле подписано
        .should("contain", "Комментарий");

      cy.get("input[id=comment]")
        //Проверяем, что поле доступно для редактирования
        .should("be.enabled")
        //Проверяем, что есть значение
        .and("have.value", "г. Ростов-на-Дону (головной офис в Москве)");
    });

    //Проверяем блок ФИО руководителя
    cy.get("div[id=DirectorName]").within(() => {
      cy.get("label[id=value-label]")
        //Проверяем, что блок подписан
        .should("contain", "ФИО руководителя");

      //Проверяем, что есть значение и поле доступно для редактирования
      cy.get("input[data-cy=value-DirectorName]")
        .should("have.value", "Кузьминых Елена Викторовна")
        .and("be.enabled");

      //Проверяем, что есть кнопка "Не предоставили" и она нажата
      cy.get("button[data-cy=DirectorName_btn_reject]")
        .should("have.attr", "data-cy-checked", "false")
        .and("be.enabled")
        .parent()
        .should(
          "have.attr",
          "aria-label",
          "Отказались предоставить информацию"
        );
    });

    //Проверяем блок Должность
    cy.get("div[id=DirectorRole]").within(() => {
      cy.get("label[id=value-label]")
        //Проверяем, что блок подписан
        .should("contain", "Должность");

      //Проверяем, что есть значение и поле доступно для редактирования
      cy.get("input[data-cy=value-DirectorRole]")
        .should("have.value", "главный бухгалтер")
        .and("be.enabled");

      //Проверяем, что есть кнопка "Не предоставили" и она нажата
      cy.get("button[data-cy=DirectorRole_btn_reject]")
        .should("have.attr", "data-cy-checked", "false")
        .and("be.enabled")
        .parent()
        .should(
          "have.attr",
          "aria-label",
          "Отказались предоставить информацию"
        );
    });
  });
});
