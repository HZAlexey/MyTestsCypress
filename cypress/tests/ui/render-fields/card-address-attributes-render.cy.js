/// <reference types="cypress" />

context("Проверка владки 'Адрес'", () => {
  describe("Проверяем наличие обязательных UI элементов на вкладке 'Адрес'", () => {
    it("Нет доп.лэйблов в адресе", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("default");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Адрес"
      cy.get("button[id=BaseCard]").click();

      //Проверяем, что НЕТ лэйблов таких как "Привязка к карте", "ЭТажи", "+1", "Условный адрес"
      cy.get("div[id=top_panel]")
        .find("div[class='CardAddressEditView-rowDirection-1487']")
        .should("not.exist");
    });

    it("Проверяем, что заполнены все поля адреса", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-Address-attributes-render");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Адрес"
      cy.get("button[id=BaseCard]").click();

      //Получаем блок с адресом
      cy.get("div[id=top_panel]").within(() => {
        //Проверяем наличие Адреса в заголовке блока
        cy.get("h3[data-cy=toolbar-sub-title]").should(
          "have.text",
          "Чита г. (Чита городской округ, Забайкальский край, Россия), Вокзальная, 3 лит А"
        );

        //Проверяем наличие Информаии о здании в заголовке блока
        cy.get("h3")
          .eq(1)
          .should(
            "have.text",
            "Мегастрой, торговый центр • Торговый центр • Этажа: 2"
          );

        //Проверяем, что отображается привязка к карте
        cy.get("h6[data-cy=address-is-linked]").should(
          "have.text",
          "Привязан к карте"
        );

        //Проверяем, что отображается привязка к зданию с Этажами
        cy.get("h6[data-cy=address-has-floors]").should("have.text", "Этажи");

        //Проверяем, что отображается фирмы +1
        cy.get("div[data-cy=address-toolbar-right]").within(() => {
          //Проверяем, что поле подписано
          cy.get("div[id=text_dialog]").should("have.text", "+2 фирмы");
        });

        //Проверяем, что поле Регион/Область/город заполнено
        cy.get("div[data-cy=city-suggester]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=city-suggester-label]").contains(
            "Регион / Область / Город"
          );

          //Город выбран
          cy.get("input[data-cy=value-city-suggester]").should(
            "have.value",
            "Чита г. (Чита городской округ, Забайкальский край, Россия)"
          );
          cy.get("input").should("be.enabled");
        });

        //Проверяем, что поле Улица/адрес заполнено
        cy.get("div[data-cy=street-suggester]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=street-suggester-label]").contains("Улица/Адрес");

          //Улица выбрана
          cy.get("input[data-cy=value-street-suggester]").should(
            "have.value",
            "Вокзальная"
          );
          cy.get("input").should("be.enabled");
        });

        //Проверяем, что поле Дом заполнено
        cy.get("div[data-cy=address-suggester]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=address-suggester-label]").contains("Дом");

          //Дом выбрана
          cy.get("input[data-cy=value-address-suggester]").should(
            "have.value",
            "3 лит А"
          );
          cy.get("input").should("be.enabled");
        });

        //Проверяем, что поле Этаж заполнено
        cy.get("div[data-cy=Floor]")
          .first()
          .within(() => {
            //Проверяем, что поле подписано
            cy.get("label[id=Floor-label]").should("have.text", "Этаж");
            //Этаж выбран
            cy.get("div[role=button]").as("FloorButtons");
            cy.get("@FloorButtons").should("have.length", 1);
            cy.get("@FloorButtons").filter(':contains("1")').should("exist");
          });

        //Проверяем, что поле Офис заполнено
        cy.get("div[data-cy=Office]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=value-label]").should("have.text", "Офис");
          //Офис заполнен
          cy.get("input[data-cy=value-Office]")
            .should("have.value", "Клёвый")
            .and("be.enabled");
        });

        //Проверяем, что поле Вход заполнено
        cy.get("div[data-cy=entrance-suggester]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=entrance-suggester-label]").contains("Вход");
          //Вход заполнен

          cy.get("input[data-cy=value-entrance-suggester]").should(
            "have.value",
            "в мегастрой вход 2"
          );

          cy.get("input").should("be.enabled");
        });

        //Проверяем, что поле Ориентир заполнено
        cy.get("div[data-cy=ReferencePoint]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=value-label]").should("have.text", "Ориентир");
          //Ориентир заполнен
          cy.get("input[data-cy=value-ReferencePoint]")
            .should("have.value", "Возле магазина ждет тебя Зина")
            .and("be.enabled");
        });

        //Проверяем, что поле с Другим атрибутом заполнено
        cy.get("div[data-cy=Pavilion]").within(() => {
          //Проверяем, что поле подписано
          cy.get("label[id=value-label]").should("have.text", "Павильон");
          //Ориентир заполнен
          cy.get("input[data-cy=value-Pavilion]")
            .should("have.value", "21, 24")
            .and("be.enabled");
        });

        //Проверяем, что поле с Другим атрибутом заполнено
        cy.get("div[data-cy=address_other_attributes]").should("exist");

        //Проверяем, что по умолчанию карта свернута
        cy.get("div[id=map]").should("not.exist");
        //Есть кнопка "Раскрыть карту"
        cy.get("button[data-cy=open-map]").should("exist").click();
        //Появилась развернутая карта
        cy.get("div[id=map]").should("exist");
      });
    });

    it("Дополнительные адреса", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection(
        "card-Address-attributes-render_additional_addresses"
      );

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Адрес"
      cy.get("button[id=BaseCard]").click();

      //Получаем блок с адресом
      cy.get("div[id=top_panel]").within(() => {
        //Проверяем, что отображается Условный адрес
        cy.get("h6[data-cy=address-is-conditional]").should(
          "have.text",
          "Условный адрес"
        );

        //Есть блок Дополнительные адреса
        //Проверяем, что по умолчанию блок свернут
        cy.get("div[class='MuiCollapse-container MuiCollapse-entered']").should(
          "not.exist"
        );
        //Проверяем, что есть надпись "Дополнительные адреса"
        cy.get("div[data-cy='btn-additional-addresses-panel']")
          .within(() => {
            cy.get("h3").should("have.text", "Дополнительные адреса");
            cy.get("h4").should(($h4) => {
              expect($h4.eq(0)).to.contain("3");
              expect($h4.eq(1)).to.contain("Показать все");
            });
          })
          .click();

        //Проверяем, что после разворачивания списка появилось 3 адреса
        cy.get("div[role=region]")
          .should("exist")
          .within(() => {
            cy.get("h3").should(($h3) => {
              // Должно быть 3 записи
              expect($h3).to.have.length(3);
              expect($h3.eq(0)).to.contain(
                "Екатеринбург г. (Екатеринбург городской округ, Свердловская обл., Россия), Колмогорова, 66"
              );
              expect($h3.eq(1)).to.contain(
                "Екатеринбург г. (Екатеринбург городской округ, Свердловская обл., Россия), Колмогорова, 66Б"
              );
              expect($h3.eq(2)).to.contain(
                "Екатеринбург г. (Екатеринбург городской округ, Свердловская обл., Россия), Колмогорова, 66а"
              );
            });
          });
        //Сворачиваем список адресов
        cy.get("div[data-cy='btn-additional-addresses-panel']").click();
        //Проверяем, что список свернулся
        cy.get("div[class='MuiCollapse-container MuiCollapse-entered']").should(
          "not.exist"
        );
      });
    });
  });
});
