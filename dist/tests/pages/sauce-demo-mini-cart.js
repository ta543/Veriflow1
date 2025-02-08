"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMiniCartCount = void 0;
const tslib_1 = require("tslib");
const assert_utils_1 = require("../../src/tobias-playwright/utils/assert-utils");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const miniCartCount = () => (0, locator_utils_1.getLocator)(`//*[@id='shopping_cart_container']//span`);
function verifyMiniCartCount(expMiniCartCount) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectElementToHaveText)(miniCartCount(), expMiniCartCount);
    });
}
exports.verifyMiniCartCount = verifyMiniCartCount;
//# sourceMappingURL=sauce-demo-mini-cart.js.map