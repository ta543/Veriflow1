import { allure } from 'allure-playwright';
import { testMetadata } from '@TestMetadata';

export function setupAllure(testId: keyof typeof testMetadata) {
  const details = testMetadata[testId];

  allure.label('owner', details.owner);
  allure.tms(details.tms, `https://tms.example.com/${details.tms}`);
  allure.description(details.description);
  allure.severity(details.severity.toUpperCase());
  details.tags.forEach(tag => allure.tag(tag));

  if (details.suite) allure.suite(details.suite);
  if (details.feature) allure.feature(details.feature);
  if (details.story) allure.story(details.story);

  allure.testCaseId(details.tms);
  allure.historyId(`HISTORY-${details.tms}`);
  allure.attachment('Test Metadata', JSON.stringify(details, null, 2), 'application/json');
}
