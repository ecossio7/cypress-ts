describe('Basic Navigation', () => {
  it('First example', () => {
    cy.visit('https://www.saucedemo.com');
    cy.log('Visiting the Sauce Demo website');
    cy.url().should("equal", "https://www.saucedemo.com/");
  })
  it.skip("Second example not possible in cypress", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.visit("https://github.com/");
    cy.reload();
    cy.go("back");
    cy.log("Navigation back to the previous page");
    cy.url().should("equal", "https://the-internet.herokuapp.com/");
  });
})
