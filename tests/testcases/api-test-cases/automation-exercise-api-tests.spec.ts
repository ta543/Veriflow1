/**
 * (C) VeriFlow 2025 - Automation Exercise API Tests
 * This test suite validates API endpoints on automationexercise.com
 */

import { test, expect, request as playwrightRequest, APIRequestContext } from '@playwright/test';
import { setupAllure } from '@AllureMetaData';
import { initializeAPI } from '@AutomationExerciseAPI';
import * as API from '@AutomationExerciseAPI';

let apiRequest: APIRequestContext; // ✅ Declare a global API request instance

test.beforeAll(async ({ }) => {
  apiRequest = await playwrightRequest.newContext(); // ✅ Create new API request context
  initializeAPI(apiRequest); // ✅ Initialize the API context
});

test.afterAll(async () => {
  await apiRequest.dispose(); // ✅ Dispose of API request context after tests
});

test.describe('Automation Exercise API Tests', () => {
  
  test('Get All Products List', async ({ request }) => {
    setupAllure('apiAutomationExerciseGetAllProducts');
    const response = await API.getAllProducts(request);
    
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('products');
  });

  test('Get All Brands List', async ({ request }) => {
      setupAllure('apiAutomationExerciseGetAllBrands');
      const response = await API.getAllBrands(request);

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty('brands');
  });

  test('PUT Request - All Brands List should return 405', async ({ request }) => {
    setupAllure('apiAutomationExercisePutAllBrands');
    const response = await API.putAllBrands(request);

    expect(response.body.responseCode).toBe(405);
    expect(response.body.message).toBe("This request method is not supported.");
  });

  test('POST Request - Search for a Product', async ({ request }) => {
    setupAllure('apiAutomationExercisePostSearchProduct');
    const productName = "tshirt";
    const response = await API.searchProduct(request, productName);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('responseCode', 400);
    expect(response.body).toHaveProperty('message', "Bad request, search_product parameter is missing in POST request.");
  });

  test('POST Request - Verify Login without Email Parameter', async ({ request }) => {
    setupAllure('apiAutomationExerciseVerifyLoginNoEmail');
    const requestBody = {
        password: "password123"
    };
    const response = await API.verifyLogin(request, undefined, requestBody.password);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('responseCode', 400);
    expect(response.body).toHaveProperty('message', "Bad request, email or password parameter is missing in POST request.");
  });

  test('DELETE Request - Verify Login should return 405', async ({ request }) => {
    setupAllure('apiAutomationExerciseDeleteVerifyLogin');
    const response = await API.deleteVerifyLogin(request);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('responseCode', 405);
    expect(response.body).toHaveProperty('message', "This request method is not supported.");
  });
});