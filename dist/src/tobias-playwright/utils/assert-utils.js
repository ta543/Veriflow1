"use strict";
/**
 * assert-utils.ts: This module contains utility functions for assertions in tests.
 * All expect assertions will dynamically wait until either the expect timeout specified in the
 * playwright.config is reached or the condition becomes true.
 * @module AssertUtils
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectPageToHaveTitle = exports.expectPageToContainURL = exports.expectPageToHaveURL = exports.expectElementToHaveCount = exports.expectElementToContainAttribute = exports.expectElementToHaveAttribute = exports.expectElementValueNotToBeEmpty = exports.expectElementValueToBeEmpty = exports.expectElementToHaveValues = exports.expectElementToHaveValue = exports.expectElementNotToContainText = exports.expectElementToContainText = exports.expectElementNotToHaveText = exports.expectElementToHaveText = exports.expectElementToBeEditable = exports.expectElementToBeEnabled = exports.expectElementToBeDisabled = exports.expectElementNotToBeChecked = exports.expectElementToBeChecked = exports.expectElementToBeInViewport = exports.expectElementToBeAttached = exports.expectElementToBeVisible = exports.expectElementToBeHidden = exports.assertAllSoftAssertions = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
const _LocatorUtils_1 = require("@LocatorUtils");
const _PageUtils_1 = require("@PageUtils");
/**
 * Returns an Expect object configured with the given soft option.
 * @param {SoftOption} options - The soft option to configure the Expect object with.
 * @returns {Expect} - The configured Expect object.
 */
function getExpectWithSoftOption(options) {
    return test_1.expect.configure({ soft: options === null || options === void 0 ? void 0 : options.soft });
}
/**
 * Returns a Locator object and an Expect object configured with the given soft option.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {SoftOption} options - The soft option to configure the Expect object with.
 * @returns {Object} - An object containing the Locator and Expect objects.
 */
function getLocatorAndAssert(input, options) {
    const locator = (0, _LocatorUtils_1.getLocator)(input);
    const assert = getExpectWithSoftOption(options);
    return { locator, assert };
}
/**
 * Use this function to assert all the soft assertions.
 * @param {TestInfo} testInfo - The TestInfo object containing the test's information.
 */
function assertAllSoftAssertions(testInfo) {
    (0, test_1.expect)(testInfo.errors).toHaveLength(0);
}
exports.assertAllSoftAssertions = assertAllSoftAssertions;
/**
 * 1. Locator Assertions: This section contains functions that perform assertions on specific locators.
 * These functions check for various conditions such as visibility, presence in the DOM, text content, etc.
 */
/**
 * Asserts that the given element is not present in the DOM or is Hidden.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeHidden(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeHidden(options);
    });
}
exports.expectElementToBeHidden = expectElementToBeHidden;
/**
 * Asserts that the given element is present in the DOM and visible.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeVisible(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeVisible(options);
    });
}
exports.expectElementToBeVisible = expectElementToBeVisible;
/**
 * Asserts that the given element is present in the DOM.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeAttached(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeAttached(options);
    });
}
exports.expectElementToBeAttached = expectElementToBeAttached;
/**
 * Asserts that the given element is present in the DOM and visible in the viewport of the page.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeInViewport(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeInViewport(options);
    });
}
exports.expectElementToBeInViewport = expectElementToBeInViewport;
/**
 * Asserts that the given element is checked.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeChecked(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeChecked(options);
    });
}
exports.expectElementToBeChecked = expectElementToBeChecked;
/**
 * Asserts that the given element is not checked.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementNotToBeChecked(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).not.toBeChecked(options);
    });
}
exports.expectElementNotToBeChecked = expectElementNotToBeChecked;
/**
 * Asserts that the given element is disabled.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeDisabled(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeDisabled(options);
    });
}
exports.expectElementToBeDisabled = expectElementToBeDisabled;
/**
 * Asserts that the given element is enabled.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeEnabled(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeEnabled(options);
    });
}
exports.expectElementToBeEnabled = expectElementToBeEnabled;
/**
 * Asserts that the given element is editable.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToBeEditable(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeEditable(options);
    });
}
exports.expectElementToBeEditable = expectElementToBeEditable;
/**
 * Asserts that the element equals the provided string or string array or regular expression.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the text to assert.
 * @param {string | string[] | RegExp} text - The string, string array or regular expression to match against the element's text.
 * @param {ExpectOptions & ExpectTextOptions} options - The options to pass to the expect function.
 */
function expectElementToHaveText(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toHaveText(text, options);
    });
}
exports.expectElementToHaveText = expectElementToHaveText;
/**
 * Asserts that the element does not equal the provided string or string array or regular expression.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the text to assert.
 * @param {string | string[] | RegExp} text - The string, string array or regular expression to match against the element's text.
 * @param {ExpectOptions & ExpectTextOptions} options - The options to pass to the expect function.
 */
function expectElementNotToHaveText(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).not.toHaveText(text, options);
    });
}
exports.expectElementNotToHaveText = expectElementNotToHaveText;
/**
 * Asserts that the element contains the provided string or string array or regular expression.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the text to assert.
 * @param {string | string[] | RegExp} text - The string, string array or regular expression to match against the element's text.
 * @param {ExpectOptions & ExpectTextOptions} options - The options to pass to the expect function.
 */
function expectElementToContainText(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toContainText(text, options);
    });
}
exports.expectElementToContainText = expectElementToContainText;
/**
 * Asserts that the element does not contain the provided string or string array or regular expression.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the text to assert.
 * @param {string | string[] | RegExp} text - The string, string array or regular expression to match against the element's text.
 * @param {ExpectOptions & ExpectTextOptions} options - The options to pass to the expect function.
 */
function expectElementNotToContainText(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).not.toContainText(text, options);
    });
}
exports.expectElementNotToContainText = expectElementNotToContainText;
/**
 * Asserts that the given element points to an input text box with the given text or Regex.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the input value to assert.
 * @param {string | RegExp} text - The string or regular expression to match against the element's value.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToHaveValue(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toHaveValue(text, options);
    });
}
exports.expectElementToHaveValue = expectElementToHaveValue;
/**
 * Asserts that the given element points to a multi-select/combobox (i.e. a select with the multiple attribute) and the specified values are selected.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the input value to assert.
 * @param {Array<string | RegExp>} text - The array of strings or regular expressions to match against the element's values.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToHaveValues(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toHaveValues(text, options);
    });
}
exports.expectElementToHaveValues = expectElementToHaveValues;
/**
 * Asserts that the given element points to an empty editable element or to a DOM node that has no text.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the input value to assert.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementValueToBeEmpty(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toBeEmpty(options);
    });
}
exports.expectElementValueToBeEmpty = expectElementValueToBeEmpty;
/**
 * Asserts that the given element points to a non-empty editable element or to a DOM node that has text.
 * @param {string | Locator} input - Either a string (selector) or a Locator object from where we retrieve the input value to assert.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementValueNotToBeEmpty(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).not.toBeEmpty(options);
    });
}
exports.expectElementValueNotToBeEmpty = expectElementValueNotToBeEmpty;
/**
 * Asserts that an element has an attribute with the given value.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {string} attribute - The attribute to check for.
 * @param {string | RegExp} value - The value to match against the attribute.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToHaveAttribute(input, attribute, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toHaveAttribute(attribute, value, options);
    });
}
exports.expectElementToHaveAttribute = expectElementToHaveAttribute;
/**
 * Asserts that an element has an attribute which contains the given value.
 * @param {string | Locator} input - Either a string (selector) or a Locator object.
 * @param {string} attribute - The attribute to check for.
 * @param {string | RegExp} value - The value to match against the attribute.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToContainAttribute(input, attribute, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toHaveAttribute(attribute, new RegExp(value), options);
    });
}
exports.expectElementToContainAttribute = expectElementToContainAttribute;
/**
 * Asserts that the given element has the specified count.
 * @param {string | Locator} input - Either a string (selector) or a Locator object to get the element count.
 * @param {number} count - The count to match against the element's count.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectElementToHaveCount(input, count, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { locator, assert } = getLocatorAndAssert(input, options);
        yield assert(locator, options).toHaveCount(count, options);
    });
}
exports.expectElementToHaveCount = expectElementToHaveCount;
/**
 * 2. Page Assertions: This section contains functions that perform assertions on the entire page.
 * These functions check for conditions such as URL, title, etc.
 */
/**
 * Asserts that the current page URL matches exactly the provided URL or regular expression.
 * @param {string | RegExp} urlOrRegExp - The URL or regular expression to match against the current page URL.
 */
function expectPageToHaveURL(urlOrRegExp, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const assert = getExpectWithSoftOption(options);
        yield assert((0, _PageUtils_1.getPage)()).toHaveURL(urlOrRegExp, options);
    });
}
exports.expectPageToHaveURL = expectPageToHaveURL;
/**
 * Asserts that the current page URL contains the provided URL.
 * @param {string } url - The URL to match against the current page URL.
 */
function expectPageToContainURL(url, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const assert = getExpectWithSoftOption(options);
        yield assert((0, _PageUtils_1.getPage)()).toHaveURL(new RegExp(url), options);
    });
}
exports.expectPageToContainURL = expectPageToContainURL;
/**
 * This method will be used for future stories validations Asserts that the current page Title
 * matches exactly the provided title or regular expression.
 * @param {string | RegExp} titleOrRegExp - The title or regular expression to match against the current page title.
 * @param {ExpectOptions} options - The options to pass to the expect function.
 */
function expectPageToHaveTitle(titleOrRegExp, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const assert = getExpectWithSoftOption(options);
        yield assert((0, _PageUtils_1.getPage)()).toHaveTitle(titleOrRegExp, options);
    });
}
exports.expectPageToHaveTitle = expectPageToHaveTitle;
//# sourceMappingURL=assert-utils.js.map