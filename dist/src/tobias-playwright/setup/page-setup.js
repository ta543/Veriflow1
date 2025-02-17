"use strict";
/**
 * page-setup.ts: This module is responsible for setting up the initial state of a page before each test.
 * It includes a hook that runs before each test, setting the page context. By centralizing these setup operations,
 * it ensures a consistent starting point for each test, improving test reliability. It also exports a base test object
 * with a beforeEach hook already set up. This can be used to define tests with the page context set up.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_1 = require("@playwright/test");
const _PageUtils_1 = require("@PageUtils");
/**
 * A hook that runs before each test, setting the page context.
 * @param {Page} page - The page context provided by Playwright.
 */
test_1.test.beforeEach(({ page }) => {
    (0, _PageUtils_1.setPage)(page);
});
/**
 * The base test object with a beforeEach hook already set up.
 * This can be used to define tests with the page context set up.
 */
exports.test = test_1.test;
//# sourceMappingURL=page-setup.js.map