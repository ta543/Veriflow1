"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAllure = void 0;
const allure_playwright_1 = require("allure-playwright");
const _TestMetadata_1 = require("@TestMetadata");
function setupAllure(testId) {
    const details = _TestMetadata_1.testMetadata[testId];
    allure_playwright_1.allure.label('owner', details.owner);
    allure_playwright_1.allure.tms(details.tms, `https://tms.example.com/${details.tms}`);
    allure_playwright_1.allure.description(details.description);
    allure_playwright_1.allure.severity(details.severity.toUpperCase());
    details.tags.forEach(tag => allure_playwright_1.allure.tag(tag));
    if (details.suite)
        allure_playwright_1.allure.suite(details.suite);
    if (details.feature)
        allure_playwright_1.allure.feature(details.feature);
    if (details.story)
        allure_playwright_1.allure.story(details.story);
    allure_playwright_1.allure.testCaseId(details.tms);
    allure_playwright_1.allure.historyId(`HISTORY-${details.tms}`);
    allure_playwright_1.allure.attachment('Test Metadata', JSON.stringify(details, null, 2), 'application/json');
}
exports.setupAllure = setupAllure;
//# sourceMappingURL=setupAllure.js.map