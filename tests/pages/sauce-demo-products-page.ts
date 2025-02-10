/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 *
 * VeriFlow Test Automation - LoginPage
 */

import { click } from '../../src/tobias-playwright/utils/action-utils';
import { expectElementToBeHidden, expectElementToBeVisible } from '../../src/tobias-playwright/utils/assert-utils';
import { getLocator } from '../../src/tobias-playwright/utils/locator-utils';

const productsContainer = () => getLocator(`#inventory_container`).nth(0);
const addToCartButton = `(//*[@class='inventory_item'])[%s]//*[contains(@id,'add-to-cart')]`;

export async function verifyProductsPageDisplayed() {
  await expectElementToBeVisible(productsContainer());
}

export async function verifyProductsPageNotDisplayed() {
  await expectElementToBeHidden(productsContainer());
}

export async function addToCartByProductNumber(productNo: number) {
  await click(addToCartButton.replace('%s', productNo.toString()));
}
