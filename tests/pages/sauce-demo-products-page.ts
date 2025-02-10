/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code SauceDemoProductsPage}.
 *
 * VeriFlow Test Automation - SauceDemoProductsPage
 */

import { click } from '@ActionUtils';
import { expectElementToBeHidden, expectElementToBeVisible } from '@AssertUtils';
import { getLocator } from '@LocatorUtils';

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
