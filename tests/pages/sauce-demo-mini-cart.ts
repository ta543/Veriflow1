import { expectElementToHaveText } from '../../src/tobias-playwright/utils/assert-utils';
import { getLocator } from '../../src/tobias-playwright/utils/locator-utils';

const miniCartCount = () => getLocator(`//*[@id='shopping_cart_container']//span`);

export async function verifyMiniCartCount(expMiniCartCount: string) {
  await expectElementToHaveText(miniCartCount(), expMiniCartCount);
}
