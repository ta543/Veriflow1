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
    static async PATCH(
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
     * 3. API Validation Helpers: This section contains functions to validate API responses.
     */

    /**
     * Validates the status code of an API response.
     * @param {APIResponse} response - The API response object.
     * @param {number} expectedStatus - The expected HTTP status code.
     */
    static async validateStatus(response: APIResponse, expectedStatus: number): Promise<void> {
        expect(response.status()).toBe(expectedStatus);
    }

    /**
     * Validates that an API response contains a specific JSON property.
     * @param {APIResponse} response - The API response object.
     * @param {string} property - The property to check for in the JSON response.
     */
    static async validateResponseProperty(response: APIResponse, property: string): Promise<void> {
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty(property);
    }
}
