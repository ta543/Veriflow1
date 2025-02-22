"use strict";
/**
 * timeout-constants.ts: This module provides Timeout constants that can be used to override various actions, conditional statements and assertions.
 * Instead of hard coding the timeout when overriding any utility functions, use these Timeout constants.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_TIMEOUT = exports.NAVIGATION_TIMEOUT = exports.ACTION_TIMEOUT = exports.EXPECT_TIMEOUT = exports.MAX_TIMEOUT = exports.BIG_TIMEOUT = exports.STANDARD_TIMEOUT = exports.SMALL_TIMEOUT = exports.INSTANT_TIMEOUT = void 0;
/**
 * Timeout constant for instant actions/assertions, set to 1000 milliseconds (1 second).
 */
exports.INSTANT_TIMEOUT = 1000;
/**
 * Timeout constant for small actions/assertions, set to 5000 milliseconds (5 seconds).
 */
exports.SMALL_TIMEOUT = 5 * 1000;
/**
 * Standard timeout constant, set to 15000 milliseconds (15 seconds).
 */
exports.STANDARD_TIMEOUT = 15 * 1000;
/**
 * Timeout constant for bigger actions/assertions, set to 30000 milliseconds (30 seconds).
 */
exports.BIG_TIMEOUT = 30 * 1000;
/**
 * Maximum timeout constant, set to 60000 milliseconds (1 minute).
 */
exports.MAX_TIMEOUT = 60 * 1000;
/**
 * Timeout constants used in the playwright.config.ts file.
 */
/**
 * Timeout constant for Playwright's expect function, set to 5000 milliseconds (5 seconds).
 */
exports.EXPECT_TIMEOUT = 5 * 1000;
/**
 * Timeout constant for Playwright's action functions, set to 5000 milliseconds (5 seconds).
 */
exports.ACTION_TIMEOUT = 5 * 1000;
/**
 * Timeout constant for Playwright's navigation functions, set to 30000 milliseconds (30 seconds).
 */
exports.NAVIGATION_TIMEOUT = 30 * 1000;
/**
 * Timeout constant for Playwright's test functions, set to 120000 milliseconds (2 minutes).
 */
exports.TEST_TIMEOUT = 2 * 60 * 1000;
//# sourceMappingURL=timeout-constants.js.map