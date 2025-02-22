"use strict";
/**
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const _AllureMetaData_1 = require("@AllureMetaData");
const LoginPage = tslib_1.__importStar(require("../../pages/e2e-testing/sauce-demo-pages/sauce-demo-login-page"));
const MiniCart = tslib_1.__importStar(require("../../pages/e2e-testing/sauce-demo-pages/sauce-demo-mini-cart"));
const ProductsPage = tslib_1.__importStar(require("../../pages/e2e-testing/sauce-demo-pages/sauce-demo-products-page"));
_PageSetup_1.test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
    (0, _PageSetup_1.test)('Saucedemo tests - Successful login will display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)("sauceDemoLoginTest");
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
    (0, _PageSetup_1.test)('Saucedemo test - Add product to cart', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)("sauceDemoAddToCartTest");
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        yield ProductsPage.verifyProductsPageDisplayed();
        yield ProductsPage.addToCartByProductNumber(1);
        yield MiniCart.verifyMiniCartCount('1');
    }));
    (0, _PageSetup_1.test)('Saucedemo test - When login is unsuccessful will not display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)("sauceDemoFailedLoginTest");
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.failureLogin();
        yield LoginPage.verifyErrorMessageForFailureLogin();
        yield LoginPage.verifyLoginPageisDisplayed();
        yield ProductsPage.verifyProductsPageNotDisplayed();
    }));
});
//# sourceMappingURL=sauce-demo-tests.spec.js.map