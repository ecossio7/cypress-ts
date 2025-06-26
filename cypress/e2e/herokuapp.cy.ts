import { should } from "chai";

describe('Herokuapp test cases.', () => {
  it('verify if page displays 200 status code', () => {
    cy.visit('https://the-internet.herokuapp.com/status_codes');
    cy.contains('200').click();
    cy.contains('This page returned a 200 status code').should('be.visible');
  });
  
  it("verifies the delete button is visible.", () => {
	cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
	cy.contains("Add Element").click();
	cy.get('.added-manually').should("be.visible");
  });
  
  it("verifies the five delete button are visible.", () =>{
	const n = 10;
	cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
	for (let i = 0; i<n; i++ ){
		cy.contains("Add Element").click();
	}
	cy.get(".added-manually").should("have.length", n);
  });
  
  it("verifies invalid login.", () =>{
	cy.visit("https://the-internet.herokuapp.com/login");
	cy.get("#username").type("Hola mundo");
	cy.get("#password").type("Adios mundo");
	cy.get("[type='submit']").click();
	cy.contains("Your username is invalid!").should("be.visible");
  });
  
  it("verifies login success.", () => {
	cy.visit("https://the-internet.herokuapp.com/login");
	cy.get("#username").type("tomsmith");
	cy.get("#password").type("SuperSecretPassword!");
	cy.get("[type='submit']").click();
	cy.get("[class='flash success']").should("be.visible").and("contain","You logged into a secure area!");
  });

  it("verifies the checkbox is checked.", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.get("[type='checkbox']").first().as("primerChecbox").should("not.be.checked");
    cy.get("[type='checkbox']").last().as("segundoCheckbox").should("be.checked");
    cy.get("@primerChecbox").check();
    cy.get("@segundoCheckbox").uncheck();
    cy.get("@primerChecbox").should("be.checked");
    cy.get("@segundoCheckbox").should("not.be.checked");
  });
  
  it.only("verifies buttons are not visible after click on each one.", () => {
    const n = 5;
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Add/Remove Elements").click();
    for(let i = 0; i<n ; i++){
      cy.contains("Add Element").click();
    }
    cy.get(".added-manually").each(($el) => {
		cy.wrap($el).click();
	});
	cy.get(".added-manually").should("not.exist");
  });
  
});
