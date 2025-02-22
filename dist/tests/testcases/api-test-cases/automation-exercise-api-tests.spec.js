"use strict";
/**
 * (C) VeriFlow 2025 - Automation Exercise API Tests
 * This test suite validates API endpoints on automationexercise.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
const _AllureMetaData_1 = require("@AllureMetaData");
const API = tslib_1.__importStar(require("@AutomationExerciseAPI"));
test_1.test.describe('Automation Exercise API Tests', () => {
    (0, test_1.test)('Get All Products List', ({ request }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('apiAutomationExerciseGetAllProducts');
        const response = yield API.getAllProducts(request);
        (0, test_1.expect)(response.status()).toBe(200);
        const responseBody = yield response.json();
        (0, test_1.expect)(responseBody).toHaveProperty('products');
    }));
    (0, test_1.test)('Get All Brands List', ({ request }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('apiAutomationExerciseGetAllBrands');
        const response = yield API.getAllBrands(request);
        (0, test_1.expect)(response.status()).toBe(200);
        const responseBody = yield response.json();
        (0, test_1.expect)(responseBody).toHaveProperty('brands');
    }));
    (0, test_1.test)('PUT Request - All Brands List should return 405', ({ request }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('apiAutomationExercisePutAllBrands');
        const response = yield API.putAllBrands(request);
        (0, test_1.expect)(response.body.responseCode).toBe(405);
        (0, test_1.expect)(response.body.message).toBe("This request method is not supported.");
    }));
    (0, test_1.test)('POST Request - Search for a Product', ({ request }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('apiAutomationExercisePostSearchProduct');
        const productName = "tshirt";
        const response = yield API.searchProduct(request, productName);
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.body).toHaveProperty('responseCode', 400);
        (0, test_1.expect)(response.body).toHaveProperty('message', "Bad request, search_product parameter is missing in POST request.");
    }));
    (0, test_1.test)('POST Request - Verify Login without Email Parameter', ({ request }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('apiAutomationExerciseVerifyLoginNoEmail');
        const requestBody = {
            password: "password123"
        };
        const response = yield API.verifyLogin(request, undefined, requestBody.password);
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.body).toHaveProperty('responseCode', 400);
        (0, test_1.expect)(response.body).toHaveProperty('message', "Bad request, email or password parameter is missing in POST request.");
    }));
    (0, test_1.test)('DELETE Request - Verify Login should return 405', ({ request }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('apiAutomationExerciseDeleteVerifyLogin');
        const response = yield API.deleteVerifyLogin(request);
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.body).toHaveProperty('responseCode', 405);
        (0, test_1.expect)(response.body).toHaveProperty('message', "This request method is not supported.");
    }));
});
//# sourceMappingURL=automation-exercise-api-tests.spec.js.map