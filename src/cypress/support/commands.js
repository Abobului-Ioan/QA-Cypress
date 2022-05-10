import "cypress-file-upload";

// ***********************************************
// In this file we can
// create various custom commands and overwrite
// existing commands.

/// Here we create a custom comand for login
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://assist-devqa.netlify.app/");
  cy.get(".btn-nav").contains("Log In").click();
  cy.get(".btn-login").contains("account").click();
  cy.get(":nth-child(1) > .info-detail > input")
    .type(username)
    .should("have.value", username);
  cy.get(":nth-child(2) > .info-detail > input")
    .type(password)
    .should("have.value", password);
  cy.get(".submit-btn").click();
});
