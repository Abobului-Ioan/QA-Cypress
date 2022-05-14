describe("Homepage Observation Test", () => {
  it("open the home page and verify if page have all the corresponding elements", () => {
    //// open the Home Page
    cy.visit("https://assist-devqa.netlify.app");

    ///check the navigation bar links
    cy.get(".nav-panel")
      .should("contain", "Home")
      .and("contain", "BIM 2021")
      .and("contain", "Regulations")
      .and("contain", "History");

    ///check the navigation bar buttons
    cy.get(".head-container")
      .should("contain", "Log In")
      .and("contain", "Apply Now");

    ///check header image
    cy.get(".presentation-container").find("svg");

    ///check section
    ///Benefits & Advantage
    cy.get(".benefits-advantage").should("contain", "Benefits & Advantage");
    cy.get(".advantages").children().should("have.length", 4);

    ///What Participants Say
    cy.get(".participants-say").should("contain", "What Participants Say");

    ///What you can win?
    cy.get(".prize-container").should("contain", "What you can win?");

    ///HOW TO JOIN
    cy.get(".description-content")
      .should("contain", "HOW TO JOIN")
      .and("contain", "Apply Now")
      .and("contain", "View more videos");

    ///check if video exist
    cy.get(".react-player").should("exist");

    ///check footer icons
    cy.get(".footer-go").children().should("have.length", 2);
  });
});
