require('cypress-xpath')

class ProductPage {
  getCheckoutButton() {
    //return cy.get(".nav-link.btn");
    return cy.xpath("//*[contains(text(),'Checkout')]");
  }
}

export default ProductPage;
