/**
 * api-utils.ts: This module provides a set of utility functions for making API requests in Playwright tests.
 * These utilities include GET, POST, PUT, DELETE, and other common HTTP request methods.
 */

import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class APIUtils {
    private static request: APIRequestContext;

    static init(request: APIRequestContext) {
        APIUtils.request = request;
    }

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
    static async GET(endpoint: string, headers: object = {}): Promise<APIResponse> {
        return await APIUtils.request.get(endpoint, {
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
    static async POST(endpoint: string, data: object, headers: object = {}): Promise<APIResponse> {
        return await APIUtils.request.post(endpoint, {
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
    static async PUT(endpoint: string, data: object = {}, headers: object = {}): Promise<APIResponse> {
        return await APIUtils.request.put(endpoint, {
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
    static async DEL(endpoint: string, headers: object = {}): Promise<APIResponse> {
        return await APIUtils.request.delete(endpoint, {
            headers: { 'Content-Type': 'application/json', ...headers }
        });
    }

    /**
     * Sends a PATCH request to the specified endpoint with a JSON payload.
     * @param {APIRequestContext} request - The Playwright API request context.
     * @param {string} endpoint - The URL of the endpoint.
     * @param {object} headers - Optional headers for the request.
     * @param {object} data - The JSON payload to send.
     * @returns {Promise<APIResponse>} - The API response.
     */
    static async PATCH(endpoint: string, data: object = {}, headers: object = {}): Promise<APIResponse> {
        return await APIUtils.request.patch(endpoint, {
            headers: { 'Content-Type': 'application/json', ...headers },
            data
        });
    }

    /**
     * 2. API Debugging & Logging: This section contains functions to log API responses for debugging purposes.
     */

    /**
     * 3. API Validation Helpers: This section contains functions to validate API responses.
     */

    /**
     * Validates the status code of an API response.
     * @param {APIResponse | { status: number; body: any }} response - The API response object.
     * @param {number} expectedStatus - The expected HTTP status code.
     */
    static async APICode(response: APIResponse | { status: number; body: any }, expectedStatus: number): Promise<void> {
        const statusCode = typeof response.status === 'function' ? response.status() : response.status;
        expect(statusCode).toBe(expectedStatus);
    }

    /**
     * Validates that an API response contains specific JSON properties with expected values.
     * @param {APIResponse | { body: any }} response - The API response object.
     * @param {string} key - The JSON key to validate.
     * @param {any} expectedValue - The expected value of the key.
     */
    static async APIBody(
        response: APIResponse | { status: number; body: any },
        key: string,
        expectedValue: any
    ): Promise<void> {
        let responseBody: any;

        if ('json' in response && typeof response.json === 'function') {
            responseBody = await response.json();
        } else if ('body' in response) {
            responseBody = response.body;
        } else {
            throw new Error('Invalid response format. Expected APIResponse or an object with status and body.');
        }

        expect(responseBody).toHaveProperty(key, expectedValue);
    }
}
