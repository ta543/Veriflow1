"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const page_setup_1 = require("../../src/tobias-playwright/setup/page-setup");
const LoginPage = tslib_1.__importStar(require("../pages/sauce-demo-login-page"));
const MiniCart = tslib_1.__importStar(require("../pages/sauce-demo-mini-cart"));
const ProductsPage = tslib_1.__importStar(require("../pages/sauce-demo-products-page"));
page_setup_1.test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
    (0, page_setup_1.test)('Saucedemo tests - Successful login will display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        //verifying products page is displayed on successful login
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
    (0, page_setup_1.test)('Saucedemo test - Add product to cart', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        yield ProductsPage.verifyProductsPageDisplayed();
        yield ProductsPage.addToCartByProductNumber(1);
        //verifying mini cart count is updated to 1
        yield MiniCart.verifyMiniCartCount('1');
    }));
    (0, page_setup_1.test)('Saucedemo test - When login is unsuccessful will not display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.failureLogin();
        yield LoginPage.verifyErrorMessageForFailureLogin();
        //verifying Login is still displayed
        yield LoginPage.verifyLoginPageisDisplayed();
        //verifying Products Page is not displayed
        yield ProductsPage.verifyProductsPageNotDisplayed();
    }));
});
// This is the preferred way of writing a test. It is more readable and easier to maintain. It is also easier to write tests in this style.
//# sourceMappingURL=sauce-demo-preferred-pom.spec.js.map