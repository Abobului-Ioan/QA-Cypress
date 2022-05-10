describe("Submit page test", () => {
  /// We get data from file(example.json) and we put values into this.data
  /// We do this to make easier to modify our input if we need

  before(function () {
    cy.fixture("data.json").then(function (data) {
      this.data = data;
    });
  });

  /// We login in on our application
  it("open the login page and typing the credinteals for a register user", function () {
    cy.login(this.data.email, this.data.password);

    ///Go to the submit form
    cy.get(".logged-menu").click();
    cy.get(".dropdown-menu > :nth-child(1)").click();
    cy.get(".btn-def").contains("Apply Now").click();

    /// Input the Project name
    cy.get(".project-name > .my-input > input").type(this.data.projectName);

    /// Input the Team name
    cy.get(".team-name > .my-input > input").type(this.data.teamName);

    /// Input the Decriptition
    cy.get("textarea").type(this.data.description);

    /// Input the Team Members
    cy.get(".team-member > .my-input > input").type(this.data.teamMember1);
    cy.get(".button-data-team-member").click();
    cy.get(".team-member > .my-input > input").type(this.data.teamMember2);
    cy.get(".button-data-team-member");

    /// Add the file
    cy.get("input[type=file]").selectFile("cypress/fixtures/minion.jpg", {
      force: true,
    });
    /// assert the file
    cy.get(".status-container").contains("minion.jpg");

    ///Press on Submit button
    cy.get(".submit-btn").click();

    ///Check if submit is succesfull
    cy.get(".container").contains("Success");
    cy.get(".btn-def").contains("Go to Homepage").click();
  });
});
