/// <reference types="cypress" />

context("Проверка владки 'Доступ в ЛК'", () => {
  describe("Проверяем наличие обязательных UI элементов на вкладке 'Доступ в ЛК'", () => {
    it("Проверяем все поля для карточки которая в поддерживаемом бранче", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-bizaccount-attributes-render-supported");

      // переходим на страницу с карточкой
      cy.visit("/card/1");

      //Открываем вкладку "Доступ в ЛК"
      cy.get("button[id=BizaccountAccess]")
        .click();

      //Проверяем, что есть заголовок
      cy.get("h2[id=toolbar_title]")
        .should('contain', 'Доступ в ЛК');

      //Получаем таблицу логинами
      cy.get('table')
        .within(() => {
          cy.get('thead')
            //Проверяем, что есть заголовоки колонок
            .should('contain', 'Логин')
            .and('contain', 'Статус и последний визит');

          cy.get('tbody')
            .within(() => {
              // Массивы с идентификаторами логинов
              const Row_bizaccount = [0, 1, 2];
              const Row_bizaccountEmail = ['elena-kuzminyh@mail.ru', 'podsolnushek39@mail.ru', 'a@mm.ru'];
              const Row_bizaccountPerson = ['Вероника', null, null];
              const Row_bizaccountStatus = ['Активирован', 'Не активен', 'Не активирован'];
              const Row_bizaccountDate = ['14 апреля 2023', '18 января 2017', null];
              const Row_bizaccountCHek = [true, true, true];

              // Цикл для проверки каждого
              cy.get(`tr[id="table_row_bizaccount"]`)
              .each(($tr, index) => {
                cy.wrap($tr)
                .within(() => {
                  // Проверка что email для всех указан
                  cy.contains('h3', Row_bizaccountEmail[index]);
                  // Проверка что есть пользователь
                  if (Row_bizaccountPerson[index] !== null) {
                    cy.contains('h6', Row_bizaccountPerson[index]);
                  }
                  //Проверка, что есть статус
                  cy.contains('h3', Row_bizaccountStatus[index]);
                  // Проверка что есть дата
                  if (Row_bizaccountDate[index] !== null) {
                    cy.contains('h6', Row_bizaccountDate[index]);
                  }
                  //Проверка, что есть кнопка удалить для всех записей и она доступна
                  cy.get('td[id="bizaccount_buttons_cell"]')
                    .find('button')
                    .should(Row_bizaccountCHek[index] ? 'be.enabled' : 'be.disabled');
                });
              });
            });
            //Проверяем, что есть поле для добавления новjго email
          cy.get('tr[id=add_new_bizaccount_row]')
            .within(() => {
              //Проверяем, что есть надпись Email
              cy.get('label[id=newMail-label]')
                .should('contain', 'Email');
              //Проверяем, что доступен ввод
              cy.get('input[id=newMail]')
                .should('exist')
                .and('be.enabled');
              //Проверяем, что есть кнопка Добавить и она доступна
              cy.get('button[type=button]')
                .should('contain', 'Добавить')
                .and('be.enabled');
            });
        });
    });
    
    it("Проверяем, что поля недоступны для редактирования если бранч не поддерживается", () => {
      // выбираем коллекцию моков
      cy.mocksSetCollection("card-bizaccount-attributes-render-unsupported");
      
      // переходим на страницу с карточкой
      cy.visit("/card/1");
      
      //Открываем вкладку "Доступ в ЛК"
      cy.get("button[id=BizaccountAccess]")
      .click();

      //Получаем таблицу логинами
      cy.get('table')
        .within(() => {
          cy.get('tbody')
            .within(() => {
              // Массивы с идентификаторами логинов
              const Row_bizaccount = [0, 1, 2];
              const Row_bizaccountEmail = ['elena-kuzminyh@mail.ru', 'podsolnushek39@mail.ru', 'a@mm.ru'];
              const Row_bizaccountPerson = ['Вероника', null, null];
              const Row_bizaccountStatus = ['Активирован', 'Не активен', 'Не активирован'];
              const Row_bizaccountDate = ['14 апреля 2023', '18 января 2017', null];
              const Row_bizaccountCHek = [false, false, false];

              // Цикл для проверки каждого
              cy.get(`tr[id="table_row_bizaccount"]`)
              .each(($tr, index) => {
                cy.wrap($tr)
                .within(() => {
                  // Проверка что email для всех указан
                  cy.contains('h3', Row_bizaccountEmail[index]);
                  // Проверка что есть пользователь
                  if (Row_bizaccountPerson[index] !== null) {
                    cy.contains('h6', Row_bizaccountPerson[index]);
                  }
                  //Проверка, что есть статус
                  cy.contains('h3', Row_bizaccountStatus[index]);
                  // Проверка что есть дата
                  if (Row_bizaccountDate[index] !== null) {
                    cy.contains('h6', Row_bizaccountDate[index]);
                  }
                  //Проверка, что нет кнопки удалить для всех записей
                  cy.get('td[id="bizaccount_buttons_cell"]')
                    .should(Row_bizaccountCHek[index] ? 'exist' : 'not.exist');
                });
              });
            });

            //Проверяем, что нет поле для добавления нового email
          cy.get('tr[id=add_new_bizaccount_row]')
          .should('not.exist')
        });
      });
  });
});



