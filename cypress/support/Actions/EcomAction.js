/// <reference types="Cypress"/>

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";
import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import BuyNowPage from "../../support/pageObjects/BuyNowPage";

    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();
    const buyNowPage = new BuyNowPage();

class EcomAction {

    hitUrl() {
        cy.visit(Cypress.env('url'));
    }

    gotoShop(tab) {
        cy.selectTab(tab);
    }

    gotoBillingPage() {
        productPage.getCheckoutButton().click();
    }

    gotoCheckout() {
        checkoutPage.getCheckoutButton().click();
    }

    confimOrderBySelectingCountry(country) {
        buyNowPage.getCountryDynamicDropdown().type(country);
        buyNowPage.getCountryValue().click();
        buyNowPage.getTermsCheckbox().click({ force: true });
        buyNowPage.getPurchaseButton().click();
    }

    verifySuccessMessage(expectedSuccessMessage) {
        buyNowPage.getSuccessMessage().then((elm) => {
            const actualText = elm.text();
            expect(actualText.includes(expectedSuccessMessage)).to.be.true;
        });
    }

} 

export default EcomAction;