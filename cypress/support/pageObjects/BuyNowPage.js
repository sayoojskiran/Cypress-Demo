class BuyNowPage {
  getCountryDynamicDropdown() {
    return cy.get("#country");
  }

  getCountryValue() {
    return cy.get("div.suggestions a");
  }

  getTermsCheckbox() {
    return cy.get("#checkbox2");
  }

  getPurchaseButton() {
    return cy.get("input[value='Purchase']");
  }

  getSuccessMessage() {
    return cy.get(".alert");
  }
}

export default BuyNowPage;
