// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("addToCart", (proudctName) => {
  cy.get("h4.card-title").each((el, index, list) => {
    if (el.text().includes(proudctName)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("selectTab", (tabName) => {
  cy.get("ul a").each(($e1) => {
    const elmVal = $e1.text();
    if (elmVal.includes(tabName)) {
      cy.wrap($e1).click();
    }
  });
});

/* Cypress.Commands.add("getSumOfProduts", (sum) => {
  cy.get("tr td:nth-child(4) strong").each(($e1) => {
    const elmVal = $e1.text();
    cy.log(elmVal);
    var splitVal = elmVal.split(" ");
    cy.log(splitVal[1]);
    sum += parseInt(splitVal[1]);
    
  }).then(function() {
    //return sum;
    cy.log(sum);
  });
}); */
