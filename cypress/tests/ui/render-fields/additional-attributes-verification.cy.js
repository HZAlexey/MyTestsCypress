/// <reference types="cypress" />

context("Cверкка доп. атрибутов", () => {
  describe("Проверяем наличие обязательных UI элементов для очереди сверки ДА", () => {
    beforeEach(() => {
      cy.mocksSetCollection("additional-attributes-verification");

      // заходим на главную страницу
      cy.visit("/");
      // заходим в очередь ДА
      cy.get("div[role = tablist]")
        .children("button[type=button]")
        .eq(4)
        .click();
      cy.get("[data-cy=DA_QUEUE]").click();
    });

    it("Должны быть две вкладки ДА, Кнопки сверки ДА и карточки, Сверка ДА", () => {
      // проверяем наличие вкладок "ДА сверка" и "ДА Остальные"
      cy.get("button[id=AdditionalAttributesForApproving]").should("exist");
      cy.get("button[id=AdditionalAttributesOther]").should("exist");

      // проверяем наличие кнопки "Сверить ДА"
      cy.get("button[id=btn_header_approve]")
        .trigger("mouseover")
        .click({ force: true });
      cy.get("div[id=menu-list-grow]").contains("Только ДА");
      cy.get("div[id=menu-list-grow]").contains("Как действующую и ДА");
      cy.get("div[id=menu-list-grow]").contains("Как скрытую и ДА");

      // проверяем наличие кнопки для сверки "ДА"
      cy.get("button[data-cy=approve-attribute-button]").should("exist");
    });
  });
});
