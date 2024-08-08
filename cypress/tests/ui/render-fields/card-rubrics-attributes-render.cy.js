/// <reference types="cypress" />

context("Проверка владки 'Рубрики'", () => {
  it("Проверяем наличие обязательных UI элементов на вкладке 'Рубрики'", () => {
    // выбираем коллекцию моков
    cy.mocksSetCollection("card-contacts-attributes-render");

    // переходим на страницу с карточкой
    cy.visit("/card/1");

    //Открываем вкладку "Рубрики"
    cy.get("button[id=Rubrics]")
      .click();

    //Получаем блок с рубриками
    cy.get("div[id=rubric_panel]")
      .within(() => {
        //Проверяем, что есть кнопка "Копировать"
        cy.get("button[id=btn_more]")
          .should("exist");

        cy.get('div')
          .eq(0)
          .children()
          .should(($div) => {
            expect($div).to.have.length(10);
            //Проверяем, что есть кол-во рубрик
            expect($div.eq(1)).to.contain('Рубрики');
            expect($div.eq(1)).to.contain('6');
            //Проверяем, что отображается рубрика первого и второго уровня
            //Проверяем, что есть названия рубрик
            expect($div.eq(2)).to.contain('Автосервис / Автотовары · Автосервис');
            expect($div.eq(2)).to.contain('Паркинги');
            expect($div.eq(3)).to.contain('Спорт / Отдых / Туризм · Туризм / Отдых');
            expect($div.eq(3)).to.contain('Лыжные базы / Горнолыжные комплексы');
            expect($div.eq(4)).to.contain('Досуг / Развлечения / Общественное питание · Места отдыха / Развлекательные заведения');
            expect($div.eq(4)).to.contain('Бани / Сауны');
            expect($div.eq(5)).to.contain('Спорт / Отдых / Туризм · Туризм / Отдых');
            expect($div.eq(5)).to.contain('Гостиницы');
            expect($div.eq(6)).to.contain('Досуг / Развлечения / Общественное питание · Общественное питание');
            expect($div.eq(6)).to.contain('Рестораны');
          });

        //Проверяем, что для каждой рубрики есть отображение Товарной рубрики
        cy.get("span[aria-label='Товарная рубрика']")
          .find('input[type="checkbox"]')
          .should(($input) => {
            expect($input).to.have.length(6)
            //Проверяем, что первая рубрика Товарная
            expect($input.eq(0)).to.be.checked
            //проверяем, что следующая рубрика не товарная
            expect($input.eq(1)).not.to.be.checked
          })

        //Проверяем, что для каждой рубрики есть отображение Рекламная рубрика
        cy.get("span[aria-label='Рекламная рубрика']")
          .find('input[type="checkbox"]')
          .should(($input) => {
            expect($input).to.have.length(6)
            //Проверяем, что первая рубрика не Рекламная
            expect($input.eq(0)).not.to.be.checked
            expect($input.eq(1)).not.to.be.checked
            //проверяем, что следующая рубрика Рекламная
            expect($input.eq(2)).to.be.checked
          })

        //Проверяем, что для каждой рубрики есть кнопка Удалить
        cy.get("button[aria-label='Удалить']")
          .should('have.length', 6)

        //Проверяем, что есть строка "Добавить рубрику"
        cy.get("input[id=rubric_search_input]")
          .should('have.attr', 'placeholder', 'Добавить рубрику');

        //Проверяем, что есть строка "Сфера деятельности" и она подписана
        cy.get("label[id=business_scope-label]")
          .should('contain', 'Сфера деятельности');

        //Проверяем, что "Сфера деятельности" заполнена
        cy.get("input[id=business_scope]")
          .should('have.value', 'Какая-то сфера деятельности');
      });

    //Проверяем, что появляется описание рубрики на которую навели мышкой
    cy.get('p')
      .eq(1)
      .trigger('mouseover');
    cy.get('div[role="tooltip"]')
      .should('be.visible')
      .should(($div) => {
        const text = $div.text();
        expect(text).to.match(/Вносить платные паркинги .+ Автостоянки./);
      });
    /*
        //Проверяем, что появляются ключевые слова рубрики на которую навели мышкой
        //Пока не получается добраться до ключевых слов, им нужно дать какой-нибуть параметр, сейчас только css класс
        cy.get('p')
          .eq(1)
          .trigger('mouseover');
        cy.get('div[role="tooltip"]')
          .should('be.visible')
          .should(($div) => {
            const text = $div.text();
            expect(text).to.match(/Tir-parking .+ парковки/);
          });
          */
  });
});
