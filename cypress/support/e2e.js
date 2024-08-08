// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import { register } from "@mocks-server/cypress-commands";

register();

beforeEach(() => {
  // Скрываем whats new
  localStorage.setItem("whatsNewSkip", "true");

  // Мок авторизации
  const testToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0IElzc3VlciIsImlhdCI6MTYwMDY3Mjg1MCwiZXhwIjo5OTk5OTk5OTk5LCJhdWQiOiJZb3VSYS1UZXN0IiwiZW1haWwiOiJ5b3VsYXRlc3QyQDJHaXMucnUiLCJvYmplY3RHdWlkIjoiMzEzOGNIT3NsRXl6VW0zL0s4aUNhQT09IiwiRGlzcGxheU5hbWUiOiJZb3VyYSBTdXBlci1NZWdhLVRlc3RlciJ9.wA8VInv4NCbUeucqPVSwYvIwjYrrojw9EPhhOcbE-Sg";
  sessionStorage.setItem("adal.idtoken", testToken);
  sessionStorage.setItem("adal.access.token.keyYouRa-WebUI", testToken);
  sessionStorage.setItem("adal.access.token.keyhttps://youra", testToken);
  sessionStorage.setItem("adal.testmode", "true");

  // Мок конфигурации. Не можем положить в mock-server
  // потому что это запрос не к YouRa API (youra-api.2gis.ru/api)
  // А к youra.2gis.ru/api/configuration
  cy.intercept("GET", `/api/configuration`, {
    statusCode: 200,
    body: {
      api_url: "https://localhost:44369",
      adfs_url: "https://intadfstest.2gis.one/",
      ga_tracking_code: null,
      log_rocket_app_id: null,
      skips_blocked: true,
      enable_hybrids: false,
      enable_hybrids_destruction_check: false,
    },
  });
});

// Не даем тестам падать из-за этой ошибки
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});

// https://docs.cypress.io/api/cypress-api/keyboard-api#Slow-down-typing-by-increasing-the-keystroke-delay
Cypress.Keyboard.defaults({
  keystrokeDelay: 0,
})

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Иконка Действующей карточки
Cypress.env('statusCardActive', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z');
