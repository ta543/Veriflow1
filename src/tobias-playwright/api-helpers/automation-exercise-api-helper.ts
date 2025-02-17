import { APIRequestContext } from '@playwright/test';
import { get, post, put, del } from '@APIUtils';

const BASE_URL = 'https://automationexercise.com/api';

export async function getAllProducts(request: any) {
    return await request.get(`${BASE_URL}/productsList`);
}

export async function getAllBrands(request: any) {
    return await request.get(`${BASE_URL}/brandsList`);
}

export async function putAllBrands(request: any) {
    const response = await request.put(`${BASE_URL}/brandsList`);
    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function searchProduct(request: any, productName: string) {
    const response = await post(request, `${BASE_URL}/searchProduct`, { 
        search_product: productName
    });
    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function verifyLogin(request: any, email?: string, password?: string) {
    const requestBody: Record<string, string> = {};

    if (email) requestBody.email = email;
    if (password) requestBody.password = password;

    const response = await post(request, `${BASE_URL}/verifyLogin`, requestBody);

    return {
        status: response.status(),
        body: await response.json()
    };
}

export async function deleteVerifyLogin(request: any) {
    const response = await del(request, `${BASE_URL}/verifyLogin`);
    return {
        status: response.status(),
        body: await response.json()
    };
}
