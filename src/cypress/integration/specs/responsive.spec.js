/// We have different screen resolution
const sizes = [
  [2560, 1440],
  [1920, 1080],
  [1024, 720],
  [640, 480],
];

describe("responsive testing", () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("https://assist-devqa.netlify.app/");
      cy.get(".logo").should("be.visible");
    });
  });
});
