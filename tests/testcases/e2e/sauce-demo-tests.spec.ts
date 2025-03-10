/** 
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */

import { test } from '@PageSetup';
import { setupAllure } from "@AllureMetaData";
import * as LoginPage from '../../pages/e2e-testing/sauce-demo-pages/sauce-demo-login-page';
import * as MiniCart from '../../pages/e2e-testing/sauce-demo-pages/sauce-demo-mini-cart';
import * as ProductsPage from '../../pages/e2e-testing/sauce-demo-pages/sauce-demo-products-page';

test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
  test('Saucedemo tests - Successful login will display Products Page', async () => {
    setupAllure("sauceDemoLoginTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo test - Add product to cart', async () => {
    setupAllure("sauceDemoAddToCartTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - When login is unsuccessful will not display Products Page', async () => {
    setupAllure("sauceDemoFailedLoginTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    await LoginPage.verifyLoginPageisDisplayed();
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
