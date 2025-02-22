/**
 * (C) VeriFlow 2025 - Automation Exercise Tests
 * This test suite validates navigation and functionality on automationexercise.com
 */

import { test } from '@PageSetup';
import { setupAllure } from '@AllureMetaData';
import * as HomePage from '../../pages/e2e-testing/automation-exercise-pages/home-page';
import * as ProductsPage from '../../pages/e2e-testing/automation-exercise-pages/products-page';
import * as CartPage from '../../pages/e2e-testing/automation-exercise-pages/cart-page';
import * as ContactUsPage from '../../pages/e2e-testing/automation-exercise-pages/contact-us-page';

test.describe('Automation Exercise App Tests', () => {
  test('Search product test', async () => {
    setupAllure('automationExerciseSearchProductTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickProductsLink();
    await ProductsPage.verifyProductsPageURL();
    await ProductsPage.searchForProduct('T-shirt');
    await ProductsPage.verifytShirtSearchDisplayed();
  });

  test('Add product to cart test', async () => {
    setupAllure('automationExerciseAddToCartTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickProductsLink();
    await ProductsPage.verifyProductsPageURL();
    await ProductsPage.searchForProduct('T-shirt');
    await ProductsPage.clickFirstAddToCartButton();
    await ProductsPage.verifyProductAddedPopup();
    await ProductsPage.clickViewCartButton();
    await CartPage.verifyCartPageURL();
  });

  test('Contact Us form test', async () => {
    setupAllure('automationExerciseContactUsTest');
    await HomePage.navigateToHomePage();
    await ContactUsPage.navigateToContactUsPage();
    await ContactUsPage.verifyContactUsPageURL();
    await ContactUsPage.fillContactForm();
    await ContactUsPage.submitContactForm();
    await ContactUsPage.returnToHomePage();
  });
});
