"use strict";
/**
 * (C) VeriFlow 2025 - Automation Exercise Tests
 * This test suite validates navigation and functionality on automationexercise.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const _AllureMetaData_1 = require("@AllureMetaData");
const HomePage = tslib_1.__importStar(require("../../pages/e2e-testing/automation-exercise-pages/home-page"));
const ProductsPage = tslib_1.__importStar(require("../../pages/e2e-testing/automation-exercise-pages/products-page"));
const CartPage = tslib_1.__importStar(require("../../pages/e2e-testing/automation-exercise-pages/cart-page"));
const ContactUsPage = tslib_1.__importStar(require("../../pages/e2e-testing/automation-exercise-pages/contact-us-page"));
_PageSetup_1.test.describe('Automation Exercise App Tests', () => {
    (0, _PageSetup_1.test)('Search product test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('automationExerciseSearchProductTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickProductsLink();
        yield ProductsPage.verifyProductsPageURL();
        yield ProductsPage.searchForProduct('T-shirt');
        yield ProductsPage.verifytShirtSearchDisplayed();
    }));
    (0, _PageSetup_1.test)('Add product to cart test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('automationExerciseAddToCartTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickProductsLink();
        yield ProductsPage.verifyProductsPageURL();
        yield ProductsPage.searchForProduct('T-shirt');
        yield ProductsPage.clickFirstAddToCartButton();
        yield ProductsPage.verifyProductAddedPopup();
        yield ProductsPage.clickViewCartButton();
        yield CartPage.verifyCartPageURL();
    }));
    (0, _PageSetup_1.test)('Contact Us form test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('automationExerciseContactUsTest');
        yield HomePage.navigateToHomePage();
        yield ContactUsPage.navigateToContactUsPage();
        yield ContactUsPage.verifyContactUsPageURL();
        yield ContactUsPage.fillContactForm();
        yield ContactUsPage.submitContactForm();
        yield ContactUsPage.returnToHomePage();
    }));
});
//# sourceMappingURL=automation-exercise-tests.spec.js.map