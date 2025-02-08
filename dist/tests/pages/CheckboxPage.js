"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckboxChecked = exports.toggleCheckbox = void 0;
const tslib_1 = require("tslib");
const action_utils_1 = require("../../src/tobias-playwright/utils/action-utils");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const checkbox1 = () => (0, locator_utils_1.getLocatorByText)('Checkbox 1');
const checkbox2 = () => (0, locator_utils_1.getLocatorByText)('Checkbox 2');
function toggleCheckbox(index) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const checkbox = index === 1 ? checkbox1() : checkbox2();
        yield (0, action_utils_1.click)(checkbox);
    });
}
exports.toggleCheckbox = toggleCheckbox;
function isCheckboxChecked(index) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const checkbox = index === 1 ? checkbox1() : checkbox2();
        return yield checkbox.isChecked();
    });
}
exports.isCheckboxChecked = isCheckboxChecked;
//# sourceMappingURL=CheckboxPage.js.map