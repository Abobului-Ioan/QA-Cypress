describe("Home Tests", () => {
  it("open the home page and verify the url and the title", () => {
    //// open the Home Page
    cy.visit("https://assist-devqa.netlify.app/");

    /// assert the url
    cy.url().should("include", "assist");

    /// assert the title
    cy.title().should("eq", "BIM");
  });
});
