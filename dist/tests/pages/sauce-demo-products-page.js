"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartByProductNumber = exports.verifyProductsPageNotDisplayed = exports.verifyProductsPageDisplayed = void 0;
const tslib_1 = require("tslib");
const action_utils_1 = require("../../src/tobias-playwright/utils/action-utils");
const assert_utils_1 = require("../../src/tobias-playwright/utils/assert-utils");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const productsContainer = () => (0, locator_utils_1.getLocator)(`#inventory_container`).nth(0);
const addToCartButton = `(//*[@class='inventory_item'])[%s]//*[contains(@id,'add-to-cart')]`;
function verifyProductsPageDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectElementToBeVisible)(productsContainer());
    });
}
exports.verifyProductsPageDisplayed = verifyProductsPageDisplayed;
function verifyProductsPageNotDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectElementToBeHidden)(productsContainer());
    });
}
exports.verifyProductsPageNotDisplayed = verifyProductsPageNotDisplayed;
function addToCartByProductNumber(productNo) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(addToCartButton.replace('%s', productNo.toString()));
    });
}
exports.addToCartByProductNumber = addToCartByProductNumber;
//# sourceMappingURL=sauce-demo-products-page.js.map