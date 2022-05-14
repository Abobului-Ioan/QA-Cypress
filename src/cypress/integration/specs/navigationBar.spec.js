describe("Navigation bar", () => {
  it("open the page and click on every link from navigation bar", () => {
    cy.visit("https://assist-devqa.netlify.app");

    /// Click on all links from navigation bar
    cy.get('a[href="/bim"]').click();
    /// assert the url
    cy.url().should("include", "bim");

    cy.get('a[href="/regulations"]').click();
    /// assert the url
    cy.url().should("include", "regulations");

    cy.get('a[href="/history"]').click();
    /// assert the url
    cy.url().should("include", "history");

    cy.get('a[href="/home"]').click();
    /// assert the url
    cy.url().should("include", "home");
  });
});
