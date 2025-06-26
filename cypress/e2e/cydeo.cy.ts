describe("Cydeo test cases", () =>{

	it("verifies dropdown list", () => {
		cy.visit("https://practice.cydeo.com/dropdown");
		cy.get('#state').select('CA').should("be.selected");
	});
	
	it("verifies option 2 is selected", () => {
		cy.visit("https://the-internet.herokuapp.com/dropdown");
		cy.get("#dropdown").select('Option 2');
		cy.get("[selected='selected']").should("be.selected");
	});
	
	it("Verifies multiple select", ()=>{
		cy.visit("https://practice.cydeo.com/dropdown");
		cy.get("[name='Languages']")
			.select(["C#", "Java"])
			.each(($el) => {
				cy.wrap($sel).should("be.selected");
		});	
	});

});
