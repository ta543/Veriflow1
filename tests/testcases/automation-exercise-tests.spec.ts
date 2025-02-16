/**
 * (C) VeriFlow 2025 - Automation Exercise Tests
 * This test suite validates navigation and functionality on automationexercise.com
 */

import { test } from '@PageSetup';
import { setupAllure } from '@AllureMetaData';
// import { ContactFormData } from '@TestDataAutomationExercise';
import * as HomePage from '@AutomationExerciseHomePage';
import * as ProductsPage from '@AutomationExerciseProductsPage';
import * as CartPage from '@AutomationExerciseCartPage';
import * as ContactUsPage from '@AutomationExerciseContactUsPage';

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
