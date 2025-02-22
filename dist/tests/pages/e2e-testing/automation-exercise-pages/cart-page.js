"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code CartPage}.
 *
 * VeriFlow Test Automation - Automation Exercise | CartPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCartPageURL = void 0;
const tslib_1 = require("tslib");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const cartPageVisible = () => (0, _LocatorUtils_1.getLocatorByText)('Shopping Cart', { exact: true });
// Methods
function verifyCartPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*view_cart/);
        yield cartPageVisible().waitFor({ state: 'visible' });
    });
}
exports.verifyCartPageURL = verifyCartPageURL;
//# sourceMappingURL=cart-page.js.map