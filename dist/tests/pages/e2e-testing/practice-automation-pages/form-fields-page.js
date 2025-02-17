"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates form field interactions on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFormSubmission = exports.fillForm = exports.verifyFormFieldsPageURL = exports.navigateToFormFieldsPage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const _TestDataPractiseAutomationFormFields_1 = require("@TestDataPractiseAutomationFormFields");
const formFieldsPageURL = 'https://practice-automation.com/form-fields';
const nameInput = () => (0, _LocatorUtils_1.getLocator)('input[id="name-input"]');
const passwordInput = () => (0, _LocatorUtils_1.getLocator)('input[type="password"]');
const emailInput = () => (0, _LocatorUtils_1.getLocator)('input[name="email"]');
const favoriteDrink = (drink) => (0, _LocatorUtils_1.getLocator)(`text=${drink}`);
const favoriteColor = (color) => (0, _LocatorUtils_1.getLocator)(`text=${color}`);
const automationDropdown = () => (0, _LocatorUtils_1.getLocator)('select[name="automation"]');
const messageInput = () => (0, _LocatorUtils_1.getLocator)('textarea[name="message"]');
const submitButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Submit' });
function navigateToFormFieldsPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.gotoURL)(formFieldsPageURL);
    });
}
exports.navigateToFormFieldsPage = navigateToFormFieldsPage;
function verifyFormFieldsPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*form-fields/);
    });
}
exports.verifyFormFieldsPageURL = verifyFormFieldsPageURL;
function fillForm() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield nameInput().fill(_TestDataPractiseAutomationFormFields_1.FormFieldsCredentials.name);
        yield passwordInput().fill(_TestDataPractiseAutomationFormFields_1.FormFieldsCredentials.password);
        yield favoriteDrink('Coffee').click();
        yield favoriteColor('Blue').click();
        yield (0, _ActionUtils_1.scrollLocatorIntoView)(automationDropdown());
        yield automationDropdown().selectOption({ label: 'Yes' });
        yield (0, _ActionUtils_1.scrollLocatorIntoView)(submitButton());
        yield emailInput().fill(_TestDataPractiseAutomationFormFields_1.FormFieldsCredentials.email);
        yield messageInput().fill(_TestDataPractiseAutomationFormFields_1.FormFieldsCredentials.message);
        yield (0, _ActionUtils_1.click)(submitButton());
    });
}
exports.fillForm = fillForm;
function verifyFormSubmission() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.scrollLocatorIntoView)(messageInput());
        const isMessageCleared = yield messageInput().inputValue();
        return isMessageCleared === '';
    });
}
exports.verifyFormSubmission = verifyFormSubmission;
//# sourceMappingURL=form-fields-page.js.map