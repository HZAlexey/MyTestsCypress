/// <reference types="cypress" />

context("Проверка владки 'Название'", () => {
  describe("Проверяем наличие обязательных UI элементов на вкладке 'Название'", () => {
    it("Проверка ввода текста в поле Юр. названия", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-name-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Название"
      cy.get("button[id=Name]").click();

      //Почистим Юр. название
      cy.get("div[data-cy=LegalName]").clear();

      //Заполним Юр. название
      cy.get("div[data-cy=LegalName]").type("Кузьминых Е.Е.", { delay: 200 });

      //Проверяем, что поле Юридическое название заполнено верно
      cy.get("div[data-cy=LegalName]").within(() => {
        cy.get("input[data-cy=value-LegalName]").should(
          "have.value",
          "Кузьминых Е.Е."
        );
      });

      //Проверяем, что поле включено "Не показывать Юридическое название"
      cy.get("button[data-cy=HideLegalName]").within(() => {
        cy.get("svg[data-cy=HideLegalName_unchecked]").should("exist");
      });

      //Проверяем, что кнопка скрытия Юр. названия кликабельна
      cy.get("button[data-cy=HideLegalName]").click();
      cy.get("button[data-cy=HideLegalName]").click();
    });

    it("Именные поля для карточки POS", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-name-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Название"
      cy.get("button[id=Name]").click();

      //Получаем блок с информацией о фирме
      cy.get("div[id=top_panel]").within(() => {
        //Проверяем, что блок имеет заголовок
        cy.get("h2[data-cy=toolbar-title]").should(
          "have.text",
          "Информация о фирме"
        );
        //Проверяем наличие названия в заголовке блока
        cy.get("h3[id=toolbar_sub_title]").should(
          "have.text",
          `Электростандарт, магазин светотехники, ООО Медведевых Е.В., официальный представитель Werkel, Elektrostandard`
        );

        //Проверяем, что поле Бренд заполнено
        cy.get("div[data-cy=BrandName]").within(() => {
          cy.get("input[data-cy=value-BrandName]")
            .should("have.value", "Сантехмаркет")
            .and("be.enabled");
        });

        //Проверяем, что поле Расширение заполнено
        cy.get("div[data-cy=NameDescription]").within(() => {
          cy.get("input[data-cy=value-NameDescription]")
            .should("have.value", "магазин сантехники")
            .and("be.enabled");
        });

        //Проверяем, что поле ОПФ заполнено
        cy.get("div[data-cy=OrganizationLegalForm]").within(() => {
          cy.get("input[data-cy=value-OrganizationLegalForm]").should(
            "have.value",
            "ИП"
          );

          cy.get("input").should("be.enabled");
        });

        //Проверяем, что поле Юридическое название заполнено
        cy.get("div[data-cy=LegalName]").within(() => {
          cy.get("input[data-cy=value-LegalName]")
            .should("have.value", "Кузьминых Е.В.")
            .and("be.enabled");
        });

        //Проверяем, что поле включено "Не показывать Юридическое название"
        cy.get("button[data-cy=HideLegalName]")
          .should("be.enabled")
          .within(() => {
            cy.get("svg[data-cy=HideLegalName_checked]").should("exist");
          });

        //Проверяем, что поле Дополнение к расширению заполнено
        cy.get("div[data-cy=NameAdditionalDescription]").within(() => {
          cy.get("input[data-cy=value-NameAdditionalDescription]")
            .should(
              "have.value",
              "официальный представитель Werkel, Elektrostandard"
            )
            .and("be.enabled");
        });

        //Проверяем, что поле Варианты названия заполнено
        cy.get("div[data-cy=AlternativeName]").within(() => {
          cy.get("input[data-cy=value-AlternativeName]")
            .should("have.value", "Сантех маркет")
            .and("be.enabled");
        });

        //Проверяем, что поле Короткое название на карте заполнено
        cy.get("div[data-cy=ShortName]").within(() => {
          cy.get("input[data-cy=value-ShortName]")
            .should("have.value", "Сантехмаркет")
            .and("be.enabled");
        });

        //Проверяем, что поле Брэнд филиала заполнено
        cy.get("div[data-cy=UniqueName]").within(() => {
          cy.get("input[data-cy=value-UniqueName]")
            .should("have.value", "Электростандарт")
            .and("be.enabled");
        });

        //Проверяем, что поле Расширение филиала заполнено
        cy.get("div[data-cy=UniqueNameDescription]").within(() => {
          cy.get("input[data-cy=value-UniqueNameDescription]")
            .should("have.value", "магазин светотехники")
            .and("be.enabled");
        });

        //Проверяем, что поле Варианты названия филиала заполнено
        cy.get("div[data-cy=AlternativeNamePos]").within(() => {
          cy.get("input[data-cy=value-AlternativeNamePos]")
            .should("have.value", "Сантех маркет филиал")
            .and("be.enabled");
        });

        //Проверяем, что поле ОПФ филиала заполнено
        cy.get("div[data-cy=CardOrganizationLegalForm]").within(() => {
          cy.get("input[data-cy=value-CardOrganizationLegalForm]").should(
            "have.value",
            "ООО"
          );

          cy.get("input").should("be.enabled");
        });

        //Проверяем, что поле Юридическое название филиала заполнено
        cy.get("div[data-cy=CardLegalName]").within(() => {
          cy.get("input[data-cy=value-CardLegalName]")
            .should("have.value", "Медведевых Е.В.")
            .and("be.enabled");
        });

        //Проверяем, что поле выключено "Не показывать Юридическое название" филиала
        cy.get("button[data-cy=HideCardLegalName]")
          .should("be.enabled")
          .within(() => {
            cy.get("svg[data-cy=HideCardLegalName_unchecked]").should("exist");
          });

        //Проверяем, что поле Партнер заполнено
        cy.get("div[data-cy=PromotionalPartner]").within(() => {
          cy.get("input[data-cy=value-PromotionalPartner]")
            .should("have.value", "Сантех маркет №2")
            .and("be.enabled");
        });
      });
    });

    /* Уже не актуально, т.к. DEP убрали
    it("Именные поля для карточки DEP", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-name-attributes-render-dep");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Название"
      cy.get("button[id=Name]")
        .click()

      //Получаем блок с информацией о фирме
      cy.get('div[id=top_panel]')
        .within(() => {
          //Проверяем, что поле Подразделение заполнено
          cy.get("div[data-cy=Department]")
            .within(() => {
              cy.get("input[data-cy=value-Department]")
                .should('have.value', 'Офис подразделение')
                .and('be.enabled');
            });

          //Проверяем, что поле Расширенеи подразделения заполнено
          cy.get("div[data-cy=DepartmentDescription]")
            .within(() => {
              cy.get("input[data-cy=value-DepartmentDescription]")
                .should('have.value', 'Офис расширение подразделения')
                .and('be.enabled');
            });
        });
    });
    */
  });
});
