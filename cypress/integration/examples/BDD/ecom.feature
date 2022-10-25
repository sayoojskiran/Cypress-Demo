Feature: End to end Ecommerce

    First end to end scenario for an ecom application

    Scenario: Ecom product delivery
    Given User reaches in ecom website
    When Use navigates to shop
    And User add items to cart
    #And User verifies the total price matches the price for the induvidual products
    And User proceeds to checkout
    Then User selects country and confirm order
    And User verifies the confirmation message