import { APIRequestContext } from '@playwright/test';
import { POST, DEL, GET, PUT } from '@APIUtils';

const BASE_URL = 'https://automationexercise.com/api';

export async function getAllProducts(request: APIRequestContext) {
    return await request.GET(`${BASE_URL}/productsList`);
}

export async function getAllBrands(request: APIRequestContext) {
    return await request.GET(`${BASE_URL}/brandsList`);
}

export async function putAllBrands(request: APIRequestContext) {
    const response = await request.PUT(`${BASE_URL}/brandsList`);
    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function searchProduct(request: APIRequestContext, productName: string) {
    const response = await POST(request, `${BASE_URL}/searchProduct`, { 
        search_product: productName
    });
    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function verifyLogin(request: APIRequestContext, email?: string, password?: string) {
    const requestBody: Record<string, string> = {};

    if (email) requestBody.email = email;
    if (password) requestBody.password = password;

    const response = await POST(request, `${BASE_URL}/verifyLogin`, requestBody);

    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function deleteVerifyLogin(request: APIRequestContext) {
    const response = await DEL(request, `${BASE_URL}/verifyLogin`);
    return {
        status: response.status(),
        body: await response.json()
    };
}
