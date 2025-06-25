# Cypress TypeScript Project

This project is a **Cypress** end-to-end testing framework set up with **TypeScript**. It is designed to automate browser interactions and ensure the functionality of web applications is working as expected.

## Project Structure

The project structure is organized as follows:

```
CYPRESS-TS/
│
├── cypress/                   # Cypress test folder
│   ├── downloads/             # Files downloaded during tests
│   ├── e2e/                   # End-to-end test files
│   │   └── firstExample.cy.ts # Example test written in TypeScript
│   ├── fixtures/              # Mock data for tests (e.g., JSON)
│   ├── support/               # Custom commands, test setup
│
├── node_modules/              # Installed dependencies
├── cypress.config.ts          # Cypress configuration file
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lock file for dependencies
├── tsconfig.json              # TypeScript configuration file
```

## Installation

### Step 1: Clone the repository

If you haven't already cloned the repository, run the following command:

```bash
git clone <repository-url>
```

### Step 2: Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

This will install **Cypress**, **TypeScript**, and other necessary dependencies defined in `package.json`.

## Configuration

This project uses **TypeScript** and **Cypress** together for end-to-end testing. The configuration files are:

- **`cypress.config.ts`**: The configuration for Cypress settings (e.g., base URLs, timeouts).
- **`tsconfig.json`**: The TypeScript configuration to ensure the proper compilation of TypeScript files in the project.

## Running the Tests

### Open Cypress Test Runner

To run the tests in the Cypress UI, use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner, where you can select and run your tests interactively.

### Run Tests Headlessly

To run the tests in a headless browser (without the UI), run:

```bash
npx cypress run
```

This will execute all the tests and display the results in the terminal.

## Writing Tests

Tests are located inside the `cypress/e2e/` folder. Each test file is written in **TypeScript** with the `.cy.ts` extension.

Example of a simple test (`firstExample.cy.ts`):

```typescript
describe("My First Test", () => {
  it("Should visit the website and check title", () => {
    cy.visit("https://example.com");
    cy.title().should("include", "Example");
  });
});
```

## Custom Commands

You can add custom commands for reusable test functionality. Custom commands are located in the `cypress/support/` folder, where you can create new commands in `commands.ts` or configure the test setup.

Example of adding a custom login command (`commands.ts`):

```typescript
Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
```
