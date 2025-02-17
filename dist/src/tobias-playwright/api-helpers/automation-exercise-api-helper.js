"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVerifyLogin = exports.verifyLogin = exports.searchProduct = exports.putAllBrands = exports.getAllBrands = exports.getAllProducts = void 0;
const tslib_1 = require("tslib");
const _APIUtils_1 = require("@APIUtils");
const BASE_URL = 'https://automationexercise.com/api';
function getAllProducts(request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.get(`${BASE_URL}/productsList`);
    });
}
exports.getAllProducts = getAllProducts;
function getAllBrands(request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield request.get(`${BASE_URL}/brandsList`);
    });
}
exports.getAllBrands = getAllBrands;
function putAllBrands(request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield request.put(`${BASE_URL}/brandsList`);
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.putAllBrands = putAllBrands;
function searchProduct(request, productName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield (0, _APIUtils_1.post)(request, `${BASE_URL}/searchProduct`, {
            search_product: productName
        });
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.searchProduct = searchProduct;
function verifyLogin(request, email, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const requestBody = {};
        if (email)
            requestBody.email = email;
        if (password)
            requestBody.password = password;
        const response = yield (0, _APIUtils_1.post)(request, `${BASE_URL}/verifyLogin`, requestBody);
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.verifyLogin = verifyLogin;
function deleteVerifyLogin(request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield (0, _APIUtils_1.del)(request, `${BASE_URL}/verifyLogin`);
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.deleteVerifyLogin = deleteVerifyLogin;
//# sourceMappingURL=automation-exercise-api-helper.js.map