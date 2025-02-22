"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code ProductsPage}.
 *
 * VeriFlow Test Automation - Automation Exercise | ProductsPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickViewCartButton = exports.verifyProductAddedPopup = exports.clickFirstAddToCartButton = exports.searchForProduct = exports.verifytShirtSearchDisplayed = exports.verifyProductsPageURL = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const searchInput = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Search Product' });
const searchButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: '' });
const firstAddToCartButton = () => (0, _LocatorUtils_1.getLocator)('.overlay-content > .btn').first();
const addedPopupHeading = () => (0, _LocatorUtils_1.getLocatorByRole)('heading', { name: 'Added!' });
const viewCartButton = () => (0, _LocatorUtils_1.getLocatorByRole)('link', { name: 'View Cart' });
const tShirtSearch = () => (0, _LocatorUtils_1.getLocatorByText)('Pure Cotton V-Neck T-Shirt', { exact: true }).first();
// Methods
function verifyProductsPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*products/);
    });
}
exports.verifyProductsPageURL = verifyProductsPageURL;
function verifytShirtSearchDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(tShirtSearch());
    });
}
exports.verifytShirtSearchDisplayed = verifytShirtSearchDisplayed;
function searchForProduct(productName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(searchInput());
        yield (0, _ActionUtils_1.fill)(searchInput(), productName);
        yield (0, _ActionUtils_1.click)(searchButton());
    });
}
exports.searchForProduct = searchForProduct;
function clickFirstAddToCartButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(firstAddToCartButton());
        yield (0, _ActionUtils_1.click)(firstAddToCartButton());
    });
}
exports.clickFirstAddToCartButton = clickFirstAddToCartButton;
function verifyProductAddedPopup() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(addedPopupHeading());
    });
}
exports.verifyProductAddedPopup = verifyProductAddedPopup;
function clickViewCartButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(viewCartButton());
        yield (0, _ActionUtils_1.click)(viewCartButton());
    });
}
exports.clickViewCartButton = clickViewCartButton;
//# sourceMappingURL=products-page.js.map