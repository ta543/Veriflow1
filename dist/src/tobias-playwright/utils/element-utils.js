"use strict";
/**
 * element-utils.ts: This module provides utility functions for retrieving text from web elements in web page and conditional statements with in Playwright.
 * These utilities include a variety of functions for retrieving text, input values, URLs, and checking conditions such as
 * whether an element is visible or checked. It provides a layer of abstraction over Playwright's built-in methods for
 * interacting with elements, making it easier to perform common tasks and checks on web elements.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isElementChecked = exports.isElementHidden = exports.isElementVisible = exports.isElementAttached = exports.getLocatorCount = exports.getURL = exports.saveStorageState = exports.getAttribute = exports.getAllInputValues = exports.getInputValue = exports.getAllTexts = exports.getText = void 0;
const tslib_1 = require("tslib");
const page_utils_1 = require("./page-utils");
const locator_utils_1 = require("./locator-utils");
const timeout_constants_1 = require("./timeout-constants");
const action_utils_1 = require("./action-utils");
/**
 * 1. Retreiving Data: Use these functions to retrieve text, values, and counts from web elements.
 * These functions can also be used in conditional statements to check the state of web elements.
 * These functions are not intended for use in assertions, unless the built-in Playwright assertions do not meet your criteria.
 */
/**
 * Returns the inner text of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<string>} - The inner text of the Locator.
 */
function getText(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        return yield locator.innerText(options);
    });
}
exports.getText = getText;
/**
 * Returns the inner text of all Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @returns {Promise<Array<string>>} - The inner text of all Locator objects.
 */
function getAllTexts(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        return yield locator.allInnerTexts();
    });
}
exports.getAllTexts = getAllTexts;
/**
 * Returns the input value of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<string>} - The input value of the Locator.
 */
function getInputValue(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        return yield locator.inputValue(options);
    });
}
exports.getInputValue = getInputValue;
/**
 * Returns the input values of all Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<Array<string>>} - The input values of all Locator objects.
 */
function getAllInputValues(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locators = yield (0, locator_utils_1.getAllLocators)(input);
        return Promise.all(locators.map(locator => getInputValue(locator, options)));
    });
}
exports.getAllInputValues = getAllInputValues;
/**
 * Returns the attribute of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {string} attributeName - The name of the attribute to get.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<null | string>} - The attribute of the Locator if present or null if absent.
 */
function getAttribute(input, attributeName, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        return yield locator.getAttribute(attributeName, options);
    });
}
exports.getAttribute = getAttribute;
/**
 * Saves the storage state of the page.
 * @param {string} [path] - Optional path to save the storage state to.
 * @returns {Promise<void>}
 */
function saveStorageState(path) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, page_utils_1.getPage)().context().storageState({ path: path });
    });
}
exports.saveStorageState = saveStorageState;
/**
 * Returns the URL of the page.
 * @param {NavigationOptions} [options] - Optional navigation options.
 * @returns {Promise<string>} - The URL of the page.
 */
function getURL(options = { waitUntil: 'load' }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, action_utils_1.waitForPageLoadState)(options);
            return (0, page_utils_1.getPage)().url();
        }
        catch (error) {
            console.log(`getURL- ${error instanceof Error ? error.message : String(error)}`);
            return '';
        }
    });
}
exports.getURL = getURL;
/**
 * Returns the count of Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<number>} - The count of the Locator objects.
 */
function getLocatorCount(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || timeout_constants_1.INSTANT_TIMEOUT;
        try {
            if (yield isElementAttached(input, { timeout: timeoutInMs })) {
                return (yield (0, locator_utils_1.getAllLocators)(input)).length;
            }
        }
        catch (error) {
            console.log(`getLocatorCount- ${error instanceof Error ? error.message : String(error)}`);
        }
        return 0;
    });
}
exports.getLocatorCount = getLocatorCount;
/**
 * 2. Conditions: Use these checks within conditional statements.
 * They are not intended for use in assertions, unless the built-in Playwright assertions do not meet your criteria.
 */
/**
 * Checks if a Locator object is attached to DOM.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is attached, false otherwise.
 */
function isElementAttached(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input); // Assuming getLocator returns a Playwright Locator
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || timeout_constants_1.SMALL_TIMEOUT;
        try {
            yield locator.waitFor({ state: 'attached', timeout: timeoutInMs });
            return true;
        }
        catch (error) {
            console.log(`isElementAttached- ${error instanceof Error ? error.message : String(error)}`);
            return false;
        }
    });
}
exports.isElementAttached = isElementAttached;
/**
 * Checks if a Locator object is attached to DOM and is visible.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is visible, false otherwise.
 */
function isElementVisible(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || timeout_constants_1.SMALL_TIMEOUT;
        const startTime = Date.now();
        try {
            while (Date.now() - startTime < timeoutInMs) {
                if (yield locator.isVisible(options)) {
                    return true;
                }
                yield new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        catch (error) {
            console.log(`isElementVisible- ${error instanceof Error ? error.message : String(error)}`);
        }
        return false;
    });
}
exports.isElementVisible = isElementVisible;
/**
 * Checks if a Locator object is hidden or not present in DOM.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is hidden, false otherwise.
 */
function isElementHidden(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || timeout_constants_1.SMALL_TIMEOUT;
        const startTime = Date.now();
        try {
            while (Date.now() - startTime < timeoutInMs) {
                if (yield locator.isHidden(options)) {
                    return true;
                }
                yield new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        catch (error) {
            console.log(`isElementHidden- ${error instanceof Error ? error.message : String(error)}`);
        }
        return false;
    });
}
exports.isElementHidden = isElementHidden;
/**
 * Checks if a Locator object is checked.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is checked, false otherwise.
 */
function isElementChecked(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            if (yield isElementVisible(input, options)) {
                return yield (0, locator_utils_1.getLocator)(input).isChecked(options);
            }
        }
        catch (error) {
            console.log(`isElementChecked- ${error instanceof Error ? error.message : String(error)}`);
        }
        return false;
    });
}
exports.isElementChecked = isElementChecked;
//# sourceMappingURL=element-utils.js.map