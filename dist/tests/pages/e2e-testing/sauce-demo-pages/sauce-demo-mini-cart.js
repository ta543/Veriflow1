"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code SauceDemoMiniCartPage}.
 *
 * VeriFlow Test Automation - Sauce Demo | SauceDemoMiniCartPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMiniCartCount = void 0;
const tslib_1 = require("tslib");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const miniCartCount = () => (0, _LocatorUtils_1.getLocator)(`//*[@id='shopping_cart_container']//span`);
function verifyMiniCartCount(expMiniCartCount) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToHaveText)(miniCartCount(), expMiniCartCount);
    });
}
exports.verifyMiniCartCount = verifyMiniCartCount;
//# sourceMappingURL=sauce-demo-mini-cart.js.map