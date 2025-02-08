import { click } from '../../src/tobias-playwright/utils/action-utils';
import { getLocatorByText } from '../../src/tobias-playwright/utils/locator-utils';

const checkbox1 = () => getLocatorByText('Checkbox 1');
const checkbox2 = () => getLocatorByText('Checkbox 2');

export async function toggleCheckbox(index: number) {
  const checkbox = index === 1 ? checkbox1() : checkbox2();
  await click(checkbox);
}

export async function isCheckboxChecked(index: number): Promise<boolean> {
  const checkbox = index === 1 ? checkbox1() : checkbox2();
  return await checkbox.isChecked();
}
