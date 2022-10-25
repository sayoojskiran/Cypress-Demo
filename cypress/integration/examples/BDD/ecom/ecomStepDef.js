/// <reference types="Cypress"/>

import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import EcomAction from "../../../../support/Actions/EcomAction";

const ecomAction = new EcomAction();

Given('User reaches in ecom website', () => {
   ecomAction.hitUrl();
})

When('Use navigates to shop', function() {
    ecomAction.gotoShop(this.data.tab);
    //dfdsf
})

When('User add items to cart', function() {
    // cy.visit(url)
    const productArray = this.data.product;
    productArray.forEach((element) => {
      cy.addToCart(element);
    });
    ecomAction.gotoBillingPage();
})

When('User verifies the total price matches the price for the induvidual products', () => {
    // cy.visit(url)
})

When('User proceeds to checkout', () => {
    ecomAction.gotoCheckout();
})

Then('User selects country and confirm order', function() {
    // cy.visit(url)
    ecomAction.confimOrderBySelectingCountry(this.data.country);
})

Then('User verifies the confirmation message', function() {
    // cy.visit(url)
    ecomAction.verifySuccessMessage(this.data.successMessage);
})