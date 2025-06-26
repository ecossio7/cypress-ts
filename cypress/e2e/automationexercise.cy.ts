describe("Automation exercise tests",() => {

    it("should be displayed the login page after click on hiperlink ", () => {
        cy.visit("https://automationexercise.com");
        cy.contains("Signup / Login").click();
        cy.contains("Login to your account").should("be.visible");        
    });

    it("should be displayed the external link ", () => {
        cy.visit("https://automationexercise.com");        
        cy.contains("Video Tutorials")
            .should("be.visible")
            .and("have.attr", "href", "https://www.youtube.com/c/AutomationExercise");        
    });

});
    