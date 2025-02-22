"use strict";
/**
 * page-factory.ts: This module is responsible for setting and managing instances of pages.
 * It provides a centralized way to set and access pages, ensuring that each test has a clean, isolated page instance.
 * This helps to maintain the state and context of each test independently, improving test reliability and debugging.
 * It also includes functions for switching between pages, closing pages, and reverting to the default page.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.closePage = exports.switchToDefaultPage = exports.switchPage = exports.setPage = exports.getPage = void 0;
const tslib_1 = require("tslib");
const _TimeoutConstants_1 = require("@TimeoutConstants");
let page;
/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
function getPage() {
    return page;
}
exports.getPage = getPage;
/**
 * Sets the current Page.
 * @param {Page} pageInstance - The Page instance to set as the current Page.
 */
function setPage(pageInstance) {
    page = pageInstance;
}
exports.setPage = setPage;
/**
 * Switches to a different page by its index (1-based).
 * If the desired page isn't immediately available, this function will wait and retry for up to 'SMALL_TIMEOUT' seconds.
 * @param {number} winNum - The index of the page to switch to.
 * @throws {Error} If the desired page isn't found within 'SMALL_TIMEOUT' seconds.
 */
function switchPage(winNum) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const startTime = Date.now();
        while (page.context().pages().length < winNum && Date.now() - startTime < _TimeoutConstants_1.SMALL_TIMEOUT) {
            yield new Promise(resolve => setTimeout(resolve, 100));
        }
        if (page.context().pages().length < winNum) {
            throw new Error(`Page number ${winNum} not found after ${_TimeoutConstants_1.SMALL_TIMEOUT} seconds`);
        }
        const pageInstance = page.context().pages()[winNum - 1];
        yield pageInstance.waitForLoadState();
        setPage(pageInstance);
    });
}
exports.switchPage = switchPage;
/**
 * Switches back to the default page (the first one).
 */
function switchToDefaultPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const pageInstance = page.context().pages()[0];
        if (pageInstance) {
            yield pageInstance.bringToFront();
            setPage(pageInstance);
        }
    });
}
exports.switchToDefaultPage = switchToDefaultPage;
/**
 * Closes a page by its index (1-based).
 * If no index is provided, the current page is closed.
 * If there are other pages open, it will switch back to the default page.
 * @param {number} winNum - The index of the page to close.
 */
function closePage(winNum) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!winNum) {
            yield page.close();
            return;
        }
        const noOfWindows = page.context().pages().length;
        const pageInstance = page.context().pages()[winNum - 1];
        yield pageInstance.close();
        if (noOfWindows > 1) {
            yield switchToDefaultPage();
        }
    });
}
exports.closePage = closePage;
//# sourceMappingURL=page-utils.js.map