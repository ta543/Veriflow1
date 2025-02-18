import { APIRequestContext } from '@playwright/test';
import { APIUtils } from '@APIUtils';

const BASE_URL = 'https://automationexercise.com/api';

export function initializeAPI(request: APIRequestContext) {
    APIUtils.init(request); // ✅ Initialize once, no need to pass request each time
}

export async function getAllProducts() {
    return await APIUtils.GET(`${BASE_URL}/productsList`);
}

export async function getAllBrands() {
    return await APIUtils.GET(`${BASE_URL}/brandsList`);
}

export async function putAllBrands() {
    const response = await APIUtils.PUT(`${BASE_URL}/brandsList`);
    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function searchProduct(productName: string) {
    const response = await APIUtils.POST(`${BASE_URL}/searchProduct`, { 
        search_product: productName
    });
    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function verifyLogin(email?: string, password?: string) {
    const requestBody: Record<string, string> = {};

    if (email) requestBody.email = email;
    if (password) requestBody.password = password;

    const response = await APIUtils.POST(`${BASE_URL}/verifyLogin`, requestBody);

    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function deleteVerifyLogin() {
    const response = await APIUtils.DEL(`${BASE_URL}/verifyLogin`);
    return {
        status: response.status(),
        body: await response.json()
    };
}
