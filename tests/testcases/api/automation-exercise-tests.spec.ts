/**
 * (C) VeriFlow 2025 - Automation Exercise API Tests
 * This test suite validates API endpoints on automationexercise.com
 */

import { test, expect, request as playwrightRequest, APIRequestContext } from '@playwright/test';
import { setupAllure } from '@AllureMetaData';
import { initializeAPI } from '@AutomationExerciseAPI';
import { APIUtils } from '@APIUtils';
import * as API from '@AutomationExerciseAPI';

let apiRequest: APIRequestContext;

test.beforeAll(async ({ }) => {
  apiRequest = await playwrightRequest.newContext();
  initializeAPI(apiRequest);
});

test.afterAll(async () => {
  await apiRequest.dispose();
}); 

test.describe('Automation Exercise API Tests', () => {
  
  test('Get All Products List', async () => {
    setupAllure('apiAutomationExerciseGetAllProducts');
    const response = await API.getAllProducts();
    
    await APIUtils.APICode(response, 200);
    const responseBody = await response.json();
    await APIUtils.APIBody(response, 'products', expect.any(Array)); 
  });

  test('Get All Brands List', async () => {
    setupAllure('apiAutomationExerciseGetAllBrands');
    const response = await API.getAllBrands();

    await APIUtils.APICode(response, 200);
    const responseBody = await response.json();
    await APIUtils.APIBody(response, 'brands', expect.any(Array)); 
  });

  test('PUT Request - All Brands List should return 405', async () => {
    setupAllure('apiAutomationExercisePutAllBrands');
    const response = await API.putAllBrands();

    await APIUtils.APICode(response, 200);
    await APIUtils.APIBody(response, 'responseCode', 405);
    await APIUtils.APIBody(response, 'message', "This request method is not supported.");
  });

  test('POST Request - Search for a Product', async () => {
    setupAllure('apiAutomationExercisePostSearchProduct');
    const productName = "tshirt";
    const response = await API.searchProduct(productName);
    
    await APIUtils.APICode(response, 200);
    await APIUtils.APIBody(response, 'responseCode', 400);
    await APIUtils.APIBody(response, 'message', "Bad request, search_product parameter is missing in POST request.");
  });

  test('POST Request - Verify Login without Email Parameter', async () => {
    setupAllure('apiAutomationExerciseVerifyLoginNoEmail');
    const requestBody = {
        password: "password123"
    };
    const response = await API.verifyLogin(undefined, requestBody.password);

    await APIUtils.APICode(response, 200);
    await APIUtils.APIBody(response, 'responseCode', 400);
    await APIUtils.APIBody(response, 'message', "Bad request, email or password parameter is missing in POST request.");
  });

  test('DELETE Request - Verify Login should return 405', async () => {
    setupAllure('apiAutomationExerciseDeleteVerifyLogin');
    const response = await API.deleteVerifyLogin();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('responseCode', 405);
    expect(response.body).toHaveProperty('message', "This request method is not supported.");
  });
});