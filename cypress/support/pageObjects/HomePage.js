class HomePage {
  getEnterNameEditBox() {
    return cy.get("label + input[name='name']");
  }

  getGender() {
    return cy.get("select");
  }

  getVerificationNameEditBox() {
    return cy.get("h4 > input");
  }

  getEntrepreneurRadioButton() {
    return cy.get("#inlineRadio3");
  }

  /* getTabLink() {
        return cy.get("ul a");
    } */
}

export default HomePage;
