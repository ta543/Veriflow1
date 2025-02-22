"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates navigation on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickBrokenLinksLink = exports.clickFileDownloadLink = exports.clickFileUploadLink = exports.clickModalsLink = exports.clickCalendarsLink = exports.clickSlidersLink = exports.clickPopupsLink = exports.clickFormFieldsLink = exports.verifyHomePageURL = exports.navigateToHomePage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const homePageURL = 'https://practice-automation.com/';
const formFieldsLink = () => (0, _LocatorUtils_1.getLocatorByText)('Form Fields', { exact: true });
const popupsLink = () => (0, _LocatorUtils_1.getLocatorByText)('Popups', { exact: true });
const slidersLink = () => (0, _LocatorUtils_1.getLocatorByText)('Sliders', { exact: true });
const calendarsLink = () => (0, _LocatorUtils_1.getLocatorByText)('Calendars', { exact: true });
const modalsLink = () => (0, _LocatorUtils_1.getLocatorByText)('Modals', { exact: true });
const fileUploadLink = () => (0, _LocatorUtils_1.getLocatorByText)('File Upload', { exact: true });
const fileDownloadLink = () => (0, _LocatorUtils_1.getLocatorByText)('File Download', { exact: true });
const brokenLinksLink = () => (0, _LocatorUtils_1.getLocatorByText)('Broken Links', { exact: true });
function navigateToHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.gotoURL)(homePageURL);
    });
}
exports.navigateToHomePage = navigateToHomePage;
function verifyHomePageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(new RegExp(homePageURL));
    });
}
exports.verifyHomePageURL = verifyHomePageURL;
function clickFormFieldsLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(formFieldsLink());
    });
}
exports.clickFormFieldsLink = clickFormFieldsLink;
function clickPopupsLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(popupsLink());
    });
}
exports.clickPopupsLink = clickPopupsLink;
function clickSlidersLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(slidersLink());
    });
}
exports.clickSlidersLink = clickSlidersLink;
function clickCalendarsLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(calendarsLink());
    });
}
exports.clickCalendarsLink = clickCalendarsLink;
function clickModalsLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(modalsLink());
    });
}
exports.clickModalsLink = clickModalsLink;
function clickFileUploadLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.scrollLocatorIntoView)(fileUploadLink());
        yield (0, _ActionUtils_1.click)(fileUploadLink());
    });
}
exports.clickFileUploadLink = clickFileUploadLink;
function clickFileDownloadLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.scrollLocatorIntoView)(fileDownloadLink());
        yield (0, _ActionUtils_1.click)(fileDownloadLink());
    });
}
exports.clickFileDownloadLink = clickFileDownloadLink;
function clickBrokenLinksLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.scrollLocatorIntoView)(brokenLinksLink());
        yield (0, _ActionUtils_1.click)(brokenLinksLink());
    });
}
exports.clickBrokenLinksLink = clickBrokenLinksLink;
//# sourceMappingURL=home-page.js.map