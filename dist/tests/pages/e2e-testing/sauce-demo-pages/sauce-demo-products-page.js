"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code SauceDemoProductsPage}.
 *
 * VeriFlow Test Automation - Sauce Demo | SauceDemoProductsPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartByProductNumber = exports.verifyProductsPageNotDisplayed = exports.verifyProductsPageDisplayed = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const productsContainer = () => (0, _LocatorUtils_1.getLocator)(`#inventory_container`).nth(0);
const addToCartButton = `(//*[@class='inventory_item'])[%s]//*[contains(@id,'add-to-cart')]`;
function verifyProductsPageDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(productsContainer());
    });
}
exports.verifyProductsPageDisplayed = verifyProductsPageDisplayed;
function verifyProductsPageNotDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeHidden)(productsContainer());
    });
}
exports.verifyProductsPageNotDisplayed = verifyProductsPageNotDisplayed;
function addToCartByProductNumber(productNo) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(addToCartButton.replace('%s', productNo.toString()));
    });
}
exports.addToCartByProductNumber = addToCartByProductNumber;
//# sourceMappingURL=sauce-demo-products-page.js.map