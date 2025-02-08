"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickByJS = exports.scrollLocatorIntoView = exports.uploadFiles = exports.downloadFile = exports.doubleClick = exports.dragAndDrop = exports.focus = exports.hover = exports.getAlertText = exports.dismissAlert = exports.acceptAlert = exports.selectByIndex = exports.selectByText = exports.selectByValues = exports.selectByValue = exports.uncheck = exports.check = exports.clear = exports.type = exports.fillAndEnter = exports.fill = exports.clickAndNavigate = exports.click = exports.wait = exports.goBack = exports.reloadPage = exports.waitForPageLoadState = exports.gotoURL = void 0;
const tslib_1 = require("tslib");
const page_utils_1 = require("./page-utils");
const timeout_constants_1 = require("./timeout-constants");
const playwright_config_1 = require("../../../playwright.config");
const locator_utils_1 = require("./locator-utils");
/**
 * 1. Navigations: This section contains functions for navigating within a web page or between web pages.
 * These functions include going to a URL, waiting for a page to load, reloading a page, and going back to a previous page.
 */
/**
 * Navigates to the specified URL.
 * @param {string} path - The URL to navigate to.
 * @param {GotoOptions} options - The navigation options.
 * @returns {Promise<null | Response>} - The navigation response or null if no response.
 */
function gotoURL(path, options = { waitUntil: playwright_config_1.LOADSTATE }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield (0, page_utils_1.getPage)().goto(path, options);
    });
}
exports.gotoURL = gotoURL;
/**
 * Waits for a specific page load state.
 * @param {NavigationOptions} options - The navigation options.
 */
function waitForPageLoadState(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let waitUntil = playwright_config_1.LOADSTATE;
        if ((options === null || options === void 0 ? void 0 : options.waitUntil) && options.waitUntil !== 'commit') {
            waitUntil = options.waitUntil;
        }
        yield (0, page_utils_1.getPage)().waitForLoadState(waitUntil);
    });
}
exports.waitForPageLoadState = waitForPageLoadState;
/**
 * Reloads the current page.
 * @param {NavigationOptions} options - The navigation options.
 */
function reloadPage(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield Promise.all([(0, page_utils_1.getPage)().reload(options), (0, page_utils_1.getPage)().waitForEvent('framenavigated')]);
        yield waitForPageLoadState(options);
    });
}
exports.reloadPage = reloadPage;
/**
 * Navigates back to the previous page.
 * @param {NavigationOptions} options - The navigation options.
 */
function goBack(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield Promise.all([(0, page_utils_1.getPage)().goBack(options), (0, page_utils_1.getPage)().waitForEvent('framenavigated')]);
        yield waitForPageLoadState(options);
    });
}
exports.goBack = goBack;
/**
 * Waits for a specified amount of time.
 * @param {number} ms - The amount of time to wait in milliseconds.
 */
function wait(ms) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line playwright/no-wait-for-timeout
        yield (0, page_utils_1.getPage)().waitForTimeout(ms);
    });
}
exports.wait = wait;
/**
 * 2. Actions: This section contains functions for interacting with elements on a web page.
 * These functions include clicking, filling input fields, typing, clearing input fields, checking and unchecking checkboxes, selecting options in dropdowns, and more.
 */
/**
 * Clicks on a specified element.
 * @param {string | Locator} input - The element to click on.
 * @param {ClickOptions} options - The click options.
 */
function click(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.click(options);
    });
}
exports.click = click;
/**
 * Clicks on a specified element and waits for navigation.
 * @param {string | Locator} input - The element to click on.
 * @param {ClickOptions} options - The click options.
 */
function clickAndNavigate(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const timeout = (options === null || options === void 0 ? void 0 : options.timeout) || timeout_constants_1.STANDARD_TIMEOUT;
        yield Promise.all([click(input, options), (0, page_utils_1.getPage)().waitForEvent('framenavigated', { timeout: timeout })]);
        yield (0, page_utils_1.getPage)().waitForLoadState((options === null || options === void 0 ? void 0 : options.loadState) || playwright_config_1.LOADSTATE, {
            timeout: timeout,
        });
    });
}
exports.clickAndNavigate = clickAndNavigate;
/**
 * Fills a specified element with a value.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
function fill(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.fill(value, options);
    });
}
exports.fill = fill;
/**
 * Fills a specified element with a value and press Enter.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
function fillAndEnter(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.fill(value, options);
        yield locator.press('Enter');
    });
}
exports.fillAndEnter = fillAndEnter;
/**
 * Types a value into a specified element.
 * @param {string | Locator} input - The element to type into.
 * @param {string} value - The value to type.
 * @param {TypeOptions} options - The type options.
 */
function type(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.type(value, options);
    });
}
exports.type = type;
/**
 * Clears the value of a specified element.
 * @param {string | Locator} input - The element to clear.
 * @param {ClearOptions} options - The clear options.
 */
function clear(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.clear(options);
    });
}
exports.clear = clear;
/**
 * Checks a specified checkbox or radio button.
 * @param {string | Locator} input - The checkbox or radio button to check.
 * @param {CheckOptions} options - The check options.
 */
function check(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.check(options);
    });
}
exports.check = check;
/**
 * Unchecks a specified checkbox or radio button.
 * @param {string | Locator} input - The checkbox or radio button to uncheck.
 * @param {CheckOptions} options - The uncheck options.
 */
function uncheck(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.uncheck(options);
    });
}
exports.uncheck = uncheck;
/**
 * Selects an option in a dropdown by its value.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {string} value - The value of the option to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByValue(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.selectOption({ value: value }, options);
    });
}
exports.selectByValue = selectByValue;
/**
 * Selects options in a dropdown by their values (multi select).
 * @param {string | Locator} input - The dropdown to select options in.
 * @param {Array<string>} value - The values of the options to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByValues(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.selectOption(value, options);
    });
}
exports.selectByValues = selectByValues;
/**
 * Selects an option in a dropdown by its text.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {string} text - The text of the option to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByText(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.selectOption({ label: text }, options);
    });
}
exports.selectByText = selectByText;
/**
 * Selects an option in a dropdown by its index.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {number} index - The index of the option to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByIndex(input, index, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.selectOption({ index: index }, options);
    });
}
exports.selectByIndex = selectByIndex;
/**
 * 3. Alerts: This section contains functions for handling alert dialogs.
 * These functions include accepting and dismissing alerts, and getting the text of an alert.
 * Note: These functions currently have some repetition and could be optimized by applying the DRY (Don't Repeat Yourself) principle.
 */
/**
 * Accepts an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @param {string} promptText - The text to enter into a prompt dialog.
 * @returns {Promise<string>} - The message of the dialog.
 */
function acceptAlert(input, promptText) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        let dialogMessage = '';
        (0, page_utils_1.getPage)().once('dialog', dialog => {
            dialogMessage = dialog.message();
            dialog.accept(promptText).catch(e => console.error('Error accepting dialog:', e));
        });
        yield locator.click();
        // temporary fix to alerts - Need to be fixed
        // await getPage().waitForEvent('dialog');
        return dialogMessage;
    });
}
exports.acceptAlert = acceptAlert;
/**
 * Dismisses an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @returns {Promise<string>} - The message of the dialog.
 */
function dismissAlert(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        let dialogMessage = '';
        (0, page_utils_1.getPage)().once('dialog', dialog => {
            dialogMessage = dialog.message();
            dialog.dismiss().catch(e => console.error('Error dismissing dialog:', e));
        });
        yield locator.click({ noWaitAfter: true });
        // temporary fix for alerts - Need to be fixed
        // await getPage().waitForEvent('dialog');
        return dialogMessage;
    });
}
exports.dismissAlert = dismissAlert;
/**
 * Gets the text of an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @returns {Promise<string>} - The message of the dialog.
 */
function getAlertText(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        let dialogMessage = '';
        const dialogHandler = (dialog) => {
            dialogMessage = dialog.message();
        };
        (0, page_utils_1.getPage)().once('dialog', dialogHandler);
        yield locator.click();
        yield (0, page_utils_1.getPage)().waitForEvent('dialog');
        (0, page_utils_1.getPage)().off('dialog', dialogHandler);
        return dialogMessage;
    });
}
exports.getAlertText = getAlertText;
/**
 * Hovers over a specified element.
 * @param {string | Locator} input - The element to hover over.
 * @param {HoverOptions} options - The hover options.
 */
function hover(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.hover(options);
    });
}
exports.hover = hover;
/**
 * Focuses on a specified element.
 * @param {string | Locator} input - The element to focus on.
 * @param {TimeoutOption} options - The timeout options.
 */
function focus(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.focus(options);
    });
}
exports.focus = focus;
/**
 * Drags and drops a specified element to a destination.
 * @param {string | Locator} input - The element to drag.
 * @param {string | Locator} dest - The destination to drop the element at.
 * @param {DragOptions} options - The drag options.
 */
function dragAndDrop(input, dest, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const drag = (0, locator_utils_1.getLocator)(input);
        const drop = (0, locator_utils_1.getLocator)(dest);
        yield drag.dragTo(drop, options);
    });
}
exports.dragAndDrop = dragAndDrop;
/**
 * Double clicks on a specified element.
 * @param {string | Locator} input - The element to double click on.
 * @param {DoubleClickOptions} options - The double click options.
 */
function doubleClick(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.dblclick(options);
    });
}
exports.doubleClick = doubleClick;
/**
 * Downloads a file from a specified element.
 * @param {string | Locator} input - The element to download the file from.
 * @param {string} path - The path to save the downloaded file to.
 */
function downloadFile(input, path) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        const downloadPromise = (0, page_utils_1.getPage)().waitForEvent('download');
        yield click(locator);
        const download = yield downloadPromise;
        // Wait for the download process to complete
        console.log(yield download.path());
        // Save downloaded file somewhere
        yield download.saveAs(path);
    });
}
exports.downloadFile = downloadFile;
/**
 * Uploads files to a specified element.
 * @param {string | Locator} input - The element to upload files to.
 * @param {UploadValues} path - The files to upload.
 * @param {UploadOptions} options - The upload options.
 */
function uploadFiles(input, path, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.setInputFiles(path, options);
    });
}
exports.uploadFiles = uploadFiles;
/**
 * Scrolls a specified element into view.
 * @param {string | Locator} input - The element to scroll into view.
 * @param {TimeoutOption} options - The timeout options.
 */
function scrollLocatorIntoView(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.scrollIntoViewIfNeeded(options);
    });
}
exports.scrollLocatorIntoView = scrollLocatorIntoView;
/**
 * 4. JS: This section contains functions that use JavaScript to interact with elements on a web page.
 * These functions include clicking on an element using JavaScript.
 */
/**
 * Clicks on a specified element using JavaScript.
 * @param {string | Locator} input - The element to click on.
 * @param {TimeoutOption} options - The timeout options.
 */
function clickByJS(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, locator_utils_1.getLocator)(input);
        yield locator.evaluate('el => el.click()', options);
    });
}
exports.clickByJS = clickByJS;
//# sourceMappingURL=action-utils.js.map