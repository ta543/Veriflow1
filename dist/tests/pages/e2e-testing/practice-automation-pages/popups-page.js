"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates popup handling on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTooltipText = exports.clickTooltipTrigger = exports.verifyPromptPopupText = exports.clickPromptPopupButton = exports.verifyConfirmPopupAccepted = exports.acceptConfirmPopup = exports.clickConfirmPopupButton = exports.dismissAlertPopup = exports.clickAlertPopupButton = exports.popupsPageIsDisplayed = exports.navigateToPopupsPage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const popupsHeading = () => (0, _LocatorUtils_1.getLocatorByRole)('heading', { name: 'Popups' });
const alertPopupButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Alert Popup' });
const confirmPopupButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Confirm Popup' });
const promptPopupButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Prompt Popup' });
const okConfirmText = () => (0, _LocatorUtils_1.getLocatorByText)('OK it is!');
const tooltipTrigger = () => (0, _LocatorUtils_1.getLocatorByText)('<< click me to see a tooltip');
const tooltipText = () => (0, _LocatorUtils_1.getLocatorByText)(`Cool text`);
const getPromptConfirmText = () => (0, _LocatorUtils_1.getLocatorByText)('Fine, be that way...');
// Methods
function navigateToPopupsPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(popupsHeading());
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*popups/);
    });
}
exports.navigateToPopupsPage = navigateToPopupsPage;
function popupsPageIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(popupsHeading());
    });
}
exports.popupsPageIsDisplayed = popupsPageIsDisplayed;
function clickAlertPopupButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(alertPopupButton());
    });
}
exports.clickAlertPopupButton = clickAlertPopupButton;
function dismissAlertPopup() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.dismissAlert)(alertPopupButton());
    });
}
exports.dismissAlertPopup = dismissAlertPopup;
function clickConfirmPopupButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(confirmPopupButton());
    });
}
exports.clickConfirmPopupButton = clickConfirmPopupButton;
function acceptConfirmPopup() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.acceptAlert)(confirmPopupButton());
    });
}
exports.acceptConfirmPopup = acceptConfirmPopup;
function verifyConfirmPopupAccepted() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(okConfirmText());
    });
}
exports.verifyConfirmPopupAccepted = verifyConfirmPopupAccepted;
function clickPromptPopupButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(promptPopupButton());
    });
}
exports.clickPromptPopupButton = clickPromptPopupButton;
function verifyPromptPopupText() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const textLocator = getPromptConfirmText();
        yield (0, _AssertUtils_1.expectElementToBeVisible)(textLocator);
    });
}
exports.verifyPromptPopupText = verifyPromptPopupText;
function clickTooltipTrigger() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(tooltipTrigger());
    });
}
exports.clickTooltipTrigger = clickTooltipTrigger;
function verifyTooltipText() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(tooltipText());
    });
}
exports.verifyTooltipText = verifyTooltipText;
//# sourceMappingURL=popups-page.js.map