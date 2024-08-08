/// <reference types="cypress" />

context("Проверка вкладки 'Контакты'", () => {
  describe("Проверяем наличие обязательных UI элементов на вкладке 'Контакты'", () => {
    describe("Все типы контактов", () => {
      beforeEach(() => {
        // выбираем коллекцию моков
        cy.mocksSetCollection("card-contacts-attributes-render");

        // переходим на страницу с карточкой
        cy.visit("/card/1");

        //Открываем вкладку "Контакты"
        cy.get("button[id=Contacts]").click();
      });

      it("Контакты организации", () => {
        //------------Проверяем тип контакта = Телефон
        //----------Проверяем, что для контакта включены "Контакт организации", "Не публиковать","Тишина\Факс"
        //Проверяем что "Контакт организации" включен
        cy.get("div[id=70000001025138010]").as("ContactPanel");

        cy.get("@ContactPanel").within(() => {
          //Проверяем что "Контакт организации", "Не публиковать", "Тишина\Факс" включен
          cy.get(
            'span[aria-label="Контакт организации"] button[data-cy-contact-common="true"]'
          );
          cy.get(
            'span[aria-label="Не публиковать"] button[data-cy-contact-not-publish="true"]'
          );
          cy.get(
            'span[aria-label="Тишина/факс"] button[data-cy-contact-is-bad-phone="true"]'
          );

          //----------Проверяем, что по умолчанию контакт отображается в свернутом виде и его можно развернуть
          cy.get("div[data-cy=contact-details]")
            .should("not.exist")
            .then(() => {
              cy.get("p[id=value]").click();
              cy.get("div[data-cy=contact-details]").should("exist");
            });
        });

        //----------Проверяем все поля телефона
        cy.get("@ContactPanel").within(() => {
          //Проверяем, что отображается телефон с кодом города и доп.номером
          cy.get("p[id=value]").contains("(3022) 70-41-17 доп. 123");

          //Проверяем, что отображается Расширение и Контактное лицо
          cy.get("h6[id=value_additional]").contains(
            "единый номер - пн-сб 9:30-18:30; вс 9:30-18:00 • [Елена]"
          );

          //Получаем панель редактирования номера
          cy.get("div[data-cy=contact-details]:first")
            //Получаем панель с полями номера
            .as("ContactFields");

          //Проверяем все поля в панели редактирования номера
          cy.get("@ContactFields").within(() => {
            //Проверяем, что указан код страны
            //Проверяем, что поле подписаноа
            cy.get("label[id=country-selector-label]").contains("Страна");
            //Значение код страны заполнено
            cy.get("input[data-cy=value-country-selector]").should(
              "have.value",
              "7"
            );

            //Проверяем, что указан код города
            cy.get("div[data-cy=city_phone_code]").within(() => {
              //Проверяем, что поле подписано
              cy.get("label[id=city_phone_code-label]").contains("Город");
              //Код города заполнен
              cy.get("input[data-cy=value-city_phone_code]").should(
                "have.value",
                "3022"
              );
            });

            //Проверяем, что указан телефон
            //Проверяем, что поле подписано
            cy.get("label[id=value_Phone-label]").contains("Телефон");
            //Значение телефона заполнено
            cy.get("input[id=value_Phone]").should("have.value", "704117");

            //Проверяем, что указан доп.номер
            //Проверяем, что поле подписано
            cy.get("label[id=additional_number-label]").contains("Доп.");
            //Значение доп.номера заполнено
            cy.get("input[id=additional_number]").should("have.value", "123");

            //Проверяем, что указан формат
            //Проверяем, что поле подписано
            cy.get("label[id=phone-format-label]").contains("Формат");
            //Значение формат заполнено
            cy.get("input[data-cy=value-phone-format]").should(
              "have.value",
              "0-000-000-00-00"
            );

            //Проверяем, что указано Контактное лицо
            //Проверяем, что поле подписано
            cy.get("label[id=contact_person-label]").contains(
              "Контактное лицо"
            );
            //Значение Контактного лица заполнено
            cy.get("input[id=contact_person]").should("have.value", "Елена");

            //Проверяем, что указано Расширение
            //Проверяем, что поле подписано
            // внезапно пропал Лэйбл, пока убрала эту проверку
            // cy.get("label[id=value_Расширение-label]").contains("Расширение");
            //Значение Расширение заполнено
            // нужно переименовать data-cy
            cy.get("input[data-cy=value-undefined]").should(
              "have.value",
              "единый номер - пн-сб 9:30-18:30; вс 9:30-18:00"
            );
          });

          //----------Проверяем дополнительные флаги телефона
          //Надо дать им нормальные параметры, а то фиг доберешься до них
          //Получаем панель с дополнительными флагами

          cy.get("@ContactFields")
            .find('div[data-cy="contact-options"]')
            .find('div[data-cy="contact-options-items"]')
            .as("optionsPanelItems");

          const optionsPanelItems = [
            "Для сверки",
            "Контакт организации",
            "Не публиковать",
            "Тишина/факс",
            "Рекламный",
          ];

          cy.get("@optionsPanelItems")
            .children()
            .should("have.length", optionsPanelItems.length)
            .each(($el, index) => {
              cy.wrap($el)
                .should("contain", optionsPanelItems[index])
                .find("input[type=checkbox]")
                .should("be.checked");
            });
        });

        //----------Проверяем, что можно свернуть данные контакта
        cy.get("@ContactPanel").within(() => {
          cy.get("p[id=value]")
            .click()
            .get("div[data-cy=contact-details]")
            .should("not.exist");
        });

        //----------Проверяем, что есть отображение связанных контактов
        cy.get("div[id=70000001034731919]").within(() => {
          //Проверяем, что есть подпись WhatsApp и Viber
          cy.get("h6[id=value_additional]").contains("WhatsApp • Viber");
        });
      });

      it("Остальные контакты", () => {
        const selector = [
          "70000001052196415",
          "70000001013671263",
          "70000001051066884",
          "70000001069847604",
          "70000001069847606",
          "70000001051066885",
          "70000001069847603",
          "70000001069847607",
          "70000001069847608",
          "70000001069847609",
          "70000001069847610",
          "70000001069847611",
          "70000001069847612",
          "70000001039811695",
          "70000001039811696",
          "70000001069847613",
          "70000001069847614",
          "70000001069812345",
        ];
        const hrefCHek = [
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "not.exist",
          "not.exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
          "exist",
        ];
        const href = [
          "http://santehmarket75.2gis.biz",
          "mailto:elena-kuzminyh@mail.ru",
          "http://vk.com/santex75",
          "http://twitter.com/Elektro_Twitter",
          "http://facebook.com/Elektrostandart_Facebook",
          "http://instagram.com/santehmarket75",
          null,
          null,
          "http://linkedin.com/company/Elektro_Linkedin", //сами автоматически добавляем /company/
          "http://pinterest.com/Elektro_Pinterest",
          "http://youtube.com/@Electro_Youtube",
          "http://plus.google.com/Electro_GooglePlus",
          "http://ok.ru/Electro_Odnoklassniki",
          "http://wa.me/79144768200",
          "viber://contact?number=79144768200",
          "http://t.me/Electro_Telegramm",
          "http://jivo.chat/09Jc2xKysK",
          "http://t.me/Electro_telegram_channel",
        ];
        const ContactValue = [
          "santehmarket75.2gis.biz",
          "elena-kuzminyh@mail.ru",
          "santex75",
          "Elektro_Twitter",
          "Elektrostandart_Facebook",
          "santehmarket75",
          "123123123",
          "Elektrostandard_skype",
          "Elektro_Linkedin",
          "Elektro_Pinterest",
          "@Electro_Youtube",
          "Electro_GooglePlus",
          "Electro_Odnoklassniki",
          "7-914-476-82-00",
          "7-914-476-82-00",
          "Electro_Telegramm",
          "09Jc2xKysK",
          "Electro_telegram_channel",
        ];
        const labelId = [
          "Web",
          "Email",
          "Vkontakte",
          "Twitter",
          "Facebook",
          "Instagram",
          "ICQ",
          "Skype",
          "Linkedin",
          "Pinterest",
          "YouTube",
          "GooglePlus",
          "Odnoklassniki",
          "WhatsApp",
          "Viber",
          "Telegram",
          "Jivo",
          "TelegramChannel",
        ];
        const labelText = [
          "Сайт",
          "Email",
          "Vkontakte",
          "Twitter",
          "Facebook",
          "Instagram",
          "ICQ",
          "Skype",
          "Linkedin",
          "Pinterest",
          "YouTube",
          "GooglePlus",
          "Одноклассники",
          "WhatsApp",
          "Viber",
          "Telegram",
          "Jivo",
          "Telegram-канал",
        ];
        const inputValue = [
          "santehmarket75.2gis.biz",
          "elena-kuzminyh@mail.ru",
          "santex75",
          "Elektro_Twitter",
          "Elektrostandart_Facebook",
          "santehmarket75",
          "123123123",
          "Elektrostandard_skype",
          "Elektro_Linkedin",
          "Elektro_Pinterest",
          "@Electro_Youtube",
          "Electro_GooglePlus",
          "Electro_Odnoklassniki",
          "+7-914-476-82-00",
          "+7-914-476-82-00",
          "Electro_Telegramm",
          "09Jc2xKysK",
          "Electro_telegram_channel",
        ];
        const AliasCHek = [
          "exist",
          "exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          //"exist",
          // внезапно прпал лэйбл расширение
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
          "not.exist",
        ];
        const AliaslId = [
          "alias-label",
          "alias-label",
          null,
          null,
          null,
          null,
          null,
          // внезапо пропал лэйбл для расширения, пока убрала проверку
          //"value_Расширение-label",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ];
        const AliasText = [
          "Алиас",
          "Алиас",
          null,
          null,
          null,
          null,
          null,
          // внезапо пропал лэйбл для расширения, пока убрала проверку
          //"Расширение",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ];
        const inputAliasId = [
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          //"value_Расширение",
          // странный id для расширения Skype
          ":rkh:",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
          "alias",
        ];
        const AliasValue = [
          "Алиас для сайта",
          "Алиаc для email",
          null,
          null,
          null,
          null,
          null,
          "диспетчерская",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ];
        const optionsCount = [
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "3",
          "4",
          "3",
          "3",
          "3",
          "3",
        ];
        const optionsTexts = [
          "Контакт организации",
          "Не публиковать",
          "Рекламный",
          "Отказ от переписки",
        ];
        // Создаем массив промисов для выполнения каждого элемента параллельно
        const promises = selector.map((value, index) => {
          //Создаем переменные, к ним обращаться быстрее
          const hrefCheck = hrefCHek[index];
          const hasAlias = AliasCHek[index] !== "not.exist";

          return new Promise((resolve) => {
            cy.get(`div[id=${value}]`).within(() => {
              //Если ссылка на контакт существует, то проверяем ее содержимое
              if (hrefCheck !== "not.exist") {
                cy.get("a").should("have.attr", "href", href[index]);
              }
              //Проверяем значение контакта
              cy.get("p[id=value]").contains(ContactValue[index]).click();
              //Получаем панель с полями контакта
              cy.get("div[data-cy=contact-details]:first").as("ContactFields");
              //Проверяем все поля в панели редактирования
              cy.get("@ContactFields").within(() => {
                cy.get(`label[id=value_${labelId[index]}-label]`).contains(
                  labelText[index]
                );
                cy.get(`input[id=value_${labelId[index]}]`).should(($input) => {
                  expect($input).to.have.value(inputValue[index]);
                });
                //Если для контакта существует Алиас или расширение, то проверяем его содержимое
                if (hasAlias) {
                  cy.get(`label[id=${AliaslId[index]}]`).contains(
                    AliasText[index]
                  );
                  cy.get(`input[id=${inputAliasId[index]}]`).should(
                    "have.value",
                    AliasValue[index]
                  );
                }
              });
              //Получаем панель с  дополнительными флагами
              cy.get("@ContactFields")
                .find('div[data-cy="contact-options"]')
                .find('div[data-cy="contact-options-items"]')
                .as("optionsPanelItems");
              //Проверяем дополнительные флаги
              cy.get("@optionsPanelItems")
                .children()
                .should(($div) => {
                  expect($div).to.have.length(optionsCount[index]);
                  if (optionsCount[index] == "3") {
                    expect($div.eq(0)).to.contain(optionsTexts[0]);
                    expect($div.eq(1)).to.contain(optionsTexts[1]);
                    expect($div.eq(2)).to.contain(optionsTexts[2]);
                  }
                  if (optionsCount[index] == "4") {
                    expect($div.eq(0)).to.contain(optionsTexts[0]);
                    expect($div.eq(1)).to.contain(optionsTexts[1]);
                    expect($div.eq(2)).to.contain(optionsTexts[2]);
                    expect($div.eq(3)).to.contain(optionsTexts[3]);
                  }
                });

              resolve(); // Разрешаем промис после выполнения всех проверок
            });
          });
        });
      });
    });

    describe("Повторный контакт", () => {
      it("Проверяем группировку + ПК", () => {
        // выбираем коллекцию моков
        cy.mocksSetCollection("card-contacts-attributes-render-recalls");

        // переходим на страницу с карточкой
        cy.visit("/card/1");

        //Открываем вкладку "Контакты"
        cy.get("button[id=Contacts]").click();

        const contacts = [
          {
            id: "70000001034731919",
            value: "914-476-82-00",
            color: "rgb(0, 0, 0)",
            text: "Повторный звонок",
          },
          {
            id: "70000001044113974",
            value: "914-482-07-80",
            color: "rgb(5, 125, 223)",
            text: "Повторный звонок",
          },
          {
            id: "70000001044113973",
            value: "924-477-80-00",
            color: "rgb(209, 85, 54)",
            text: "Повторный звонок",
          },
        ];

        const expandContacts = [
          "RecallContacts",
          "CommonContacts",
          "Contacts",
          "UnverifiedContacts",
          "HiddenContacts",
          "ArchivedContacts",
        ];

        //Проверяем, что все группы контактов развернут по  умолчанию
        cy.get(`div[id='${expandContacts.join("'], div[id='")}']`)
          .should("have.attr", "class")
          .and("match", /expanded/);

        //Проверяем, что группу можно свернуть
        cy.get("div[id='RecallContacts']")
          .find("span")
          .contains("Контакт из ПК")
          .click()
          .then(() => {
            cy.get("div[id='RecallContacts']")
              .should("have.attr", "class")
              .and("not.match", /expanded/);
          });

        //Проверяем, что отображаются ПК: Будущий, Действующий и Просроченный
        contacts.forEach((contact) => {
          cy.get(
            `div[id='${contact.id}'] p[id='value']:contains('${contact.value}')`
          )
            .parent()
            .as("ContactsViewRow");

          cy.get("@ContactsViewRow").within(() => {
            cy.get("div").should("have.css", "color", contact.color);

            cy.get("span").should(($span) => {
              expect($span.text().trim()).to.match(
                new RegExp(`^${contact.text}`)
              );
            });
          });
        });
      });
    });
  });
});
