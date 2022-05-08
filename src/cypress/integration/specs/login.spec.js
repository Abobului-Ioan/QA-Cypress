describe("Log in Page test", () => {
  /// We get data from file(example.json) and we put values into this.data
  /// We do this to make easier to modify our input if we need

  before(function () {
    cy.fixture("data.json").then(function (data) {
      this.data = data;
    });
  });

  it("open the login page and typing the credinteals for a register user", function () {
    cy.visit("https://assist-devqa.netlify.app/");

    /// Open the Login page
    cy.get(".btn-nav").contains("Log In").click();

    /// Choose the the option "Login with a existing account"
    cy.get(".btn-login").contains("account").click();

    /// Enter valid data for an account
    cy.get(":nth-child(1) > .info-detail > input")
      .type(this.data.email)
      .should("have.value", this.data.email);
    cy.get(":nth-child(2) > .info-detail > input")
      .type(this.data.password)
      .should("have.value", this.data.password);

    /// Click on Login button
    cy.get(".submit-btn").click();

    /// Verify if we are logged in and after Log out
    /// if we remain logged in the next test will crash because of cookies
    cy.get(".logged-menu").should("be.visible").click();
    cy.get(".dropdown-menu > :nth-child(2)").click();
  });
});
