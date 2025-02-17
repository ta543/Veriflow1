"use strict";
/**
 * api-utils.ts: This module provides a set of utility functions for making API requests in Playwright tests.
 * These utilities include GET, POST, PUT, DELETE, and other common HTTP request methods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResponseProperty = exports.validateStatus = exports.logResponse = exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
const tslib_1 = require("tslib");
/**
 * 1. General API Methods: This section contains functions for making common HTTP requests.
 * These functions include GET, POST, PUT, DELETE, and handling headers.
 */
/**
 * Sends a GET request to the specified endpoint.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
function get(request, endpoint, headers = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.get(endpoint, {
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
        });
    });
}
exports.get = get;
/**
 * Sends a POST request to the specified endpoint with a JSON payload.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} data - The JSON payload to send.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
function post(request, endpoint, data, headers = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.post(endpoint, {
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            data
        });
    });
}
exports.post = post;
/**
 * Sends a PUT request to the specified endpoint with a JSON payload.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} data - The JSON payload to send.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
function put(request, endpoint, data = {}, headers = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.put(endpoint, {
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            data
        });
    });
}
exports.put = put;
/**
 * Sends a DELETE request to the specified endpoint.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
function del(request, endpoint, headers = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.delete(endpoint, {
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
        });
    });
}
exports.del = del;
/**
 * Sends a PATCH request to the specified endpoint with a JSON payload.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} data - The JSON payload to send.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
function patch(request, endpoint, data = {}, headers = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.patch(endpoint, {
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            data
        });
    });
}
exports.patch = patch;
/**
 * 2. API Debugging & Logging: This section contains functions to log API responses for debugging purposes.
 */
/**
 * Logs the response details for debugging.
 * @param {APIResponse} response - The API response object.
 */
function logResponse(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log(`📌 Status: ${response.status()}`);
        console.log(`📌 Status Text: ${response.statusText()}`);
        console.log(`📌 Headers:`, yield response.headers());
        console.log(`📌 Response Body:`, yield response.json());
    });
}
exports.logResponse = logResponse;
/**
 * 3. API Validation Helpers: This section contains functions to validate API responses.
 */
/**
 * Validates the status code of an API response.
 * @param {APIResponse} response - The API response object.
 * @param {number} expectedStatus - The expected HTTP status code.
 */
function validateStatus(response, expectedStatus) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(response.status()).toBe(expectedStatus);
    });
}
exports.validateStatus = validateStatus;
/**
 * Validates that an API response contains a specific JSON property.
 * @param {APIResponse} response - The API response object.
 * @param {string} property - The property to check for in the JSON response.
 */
function validateResponseProperty(response, property) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const responseBody = yield response.json();
        expect(responseBody).toHaveProperty(property);
    });
}
exports.validateResponseProperty = validateResponseProperty;
//# sourceMappingURL=api-utils.js.map