"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code ContactUsPage}.
 *
 * VeriFlow Test Automation - Automation Exercise | ContactUsPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnToHomePage = exports.submitContactForm = exports.fillContactForm = exports.verifyContactUsPageURL = exports.navigateToContactUsPage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const _TestDataAutomationExercise_1 = require("@TestDataAutomationExercise");
// Locators
const contactUsHeading = () => (0, _LocatorUtils_1.getLocatorByRole)("heading", { name: "GET IN TOUCH" });
const contactUsLink = () => (0, _LocatorUtils_1.getLocatorByRole)("link", { name: " Contact us" });
const nameInput = () => (0, _LocatorUtils_1.getLocatorByRole)("textbox", { name: "Name" });
const emailInput = () => (0, _LocatorUtils_1.getLocatorByRole)("textbox", { name: "Email", exact: true });
const subjectInput = () => (0, _LocatorUtils_1.getLocatorByRole)("textbox", { name: "Subject" });
const messageTextArea = () => (0, _LocatorUtils_1.getLocatorByRole)("textbox", { name: "Your Message Here" });
const submitButton = () => (0, _LocatorUtils_1.getLocatorByRole)("button", { name: "Submit" });
const homeButton = () => (0, _LocatorUtils_1.getLocatorByRole)("link", { name: "Home" });
// Methods
function navigateToContactUsPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(contactUsLink());
    });
}
exports.navigateToContactUsPage = navigateToContactUsPage;
function verifyContactUsPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*contact_us/);
        yield (0, _AssertUtils_1.expectElementToBeVisible)(contactUsHeading());
    });
}
exports.verifyContactUsPageURL = verifyContactUsPageURL;
function fillContactForm() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.fill)(nameInput(), _TestDataAutomationExercise_1.ContactFormData.validSubmission.name);
        yield (0, _ActionUtils_1.fill)(emailInput(), _TestDataAutomationExercise_1.ContactFormData.validSubmission.email);
        yield (0, _ActionUtils_1.fill)(subjectInput(), _TestDataAutomationExercise_1.ContactFormData.validSubmission.subject);
        yield (0, _ActionUtils_1.fill)(messageTextArea(), _TestDataAutomationExercise_1.ContactFormData.validSubmission.message);
    });
}
exports.fillContactForm = fillContactForm;
function submitContactForm() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(submitButton());
        yield (0, _ActionUtils_1.click)(submitButton());
    });
}
exports.submitContactForm = submitContactForm;
function returnToHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(homeButton());
        yield (0, _AssertUtils_1.expectPageToHaveURL)('https://www.automationexercise.com/');
    });
}
exports.returnToHomePage = returnToHomePage;
//# sourceMappingURL=contact-us-page.js.map