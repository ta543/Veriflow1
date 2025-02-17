/**
 * api-utils.ts: This module provides a set of utility functions for making API requests in Playwright tests.
 * These utilities include GET, POST, PUT, DELETE, and other common HTTP request methods.
 */

import { APIRequestContext, APIResponse, expect } from '@playwright/test';

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
export async function get(request: APIRequestContext, endpoint: string, headers: object = {}): Promise<APIResponse> {
    return await request.get(endpoint, {
        headers: { 'Content-Type': 'application/json', ...headers }
    });
}

/**
 * Sends a POST request to the specified endpoint with a JSON payload.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} data - The JSON payload to send.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
export async function post(
    request: APIRequestContext, 
    endpoint: string, 
    data: object, 
    headers: object = {}
): Promise<APIResponse> {
    return await request.post(endpoint, {
        headers: { 'Content-Type': 'application/json', ...headers },
        data
    });
}

/**
 * Sends a PUT request to the specified endpoint with a JSON payload.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} data - The JSON payload to send.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
export async function put(
    request: APIRequestContext, 
    endpoint: string, 
    data: object = {}, 
    headers: object = {}
): Promise<APIResponse> {
    return await request.put(endpoint, {
        headers: { 'Content-Type': 'application/json', ...headers },
        data
    });
}

/**
 * Sends a DELETE request to the specified endpoint.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
export async function del(request: APIRequestContext, endpoint: string, headers: object = {}): Promise<APIResponse> {
    return await request.delete(endpoint, {
        headers: { 'Content-Type': 'application/json', ...headers }
    });
}

/**
 * Sends a PATCH request to the specified endpoint with a JSON payload.
 * @param {APIRequestContext} request - The Playwright API request context.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {object} data - The JSON payload to send.
 * @param {object} headers - Optional headers for the request.
 * @returns {Promise<APIResponse>} - The API response.
 */
export async function patch(
    request: APIRequestContext, 
    endpoint: string, 
    data: object = {}, 
    headers: object = {}
): Promise<APIResponse> {
    return await request.patch(endpoint, {
        headers: { 'Content-Type': 'application/json', ...headers },
        data
    });
}

/**
 * 2. API Debugging & Logging: This section contains functions to log API responses for debugging purposes.
 */

/**
 * Logs the response details for debugging.
 * @param {APIResponse} response - The API response object.
 */
export async function logResponse(response: APIResponse): Promise<void> {
    console.log(`📌 Status: ${response.status()}`);
    console.log(`📌 Status Text: ${response.statusText()}`);
    console.log(`📌 Headers:`, await response.headers());
    console.log(`📌 Response Body:`, await response.json());
}

/**
 * 3. API Validation Helpers: This section contains functions to validate API responses.
 */

/**
 * Validates the status code of an API response.
 * @param {APIResponse} response - The API response object.
 * @param {number} expectedStatus - The expected HTTP status code.
 */
export async function validateStatus(response: APIResponse, expectedStatus: number): Promise<void> {
    expect(response.status()).toBe(expectedStatus);
}

/**
 * Validates that an API response contains a specific JSON property.
 * @param {APIResponse} response - The API response object.
 * @param {string} property - The property to check for in the JSON response.
 */
export async function validateResponseProperty(response: APIResponse, property: string): Promise<void> {
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty(property);
}
