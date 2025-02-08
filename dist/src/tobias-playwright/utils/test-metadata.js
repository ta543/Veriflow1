"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTestDetails = exports.testMetadata = void 0;
exports.testMetadata = {
    keyPressTest: {
        owner: 'Tobias Andersen - [tobias@tobiasa.com]',
        tms: 'TEST-005',
        description: 'Verify that key presses are correctly detected and displayed.',
        tags: ['Keyboard', 'UI'],
    },
    dropdownTest: {
        owner: 'Tobias Andersen - [tobias@tobiasa.com]',
        tms: 'TEST-001',
        description: 'Verify that selecting an option in the dropdown properly updates the selected attribute.',
        tags: ['Dropdown'],
    },
    loginTest: {
        owner: 'Tobias Andersen - [tobias@tobiasa.com]',
        tms: 'TEST-002',
        description: 'Validate that a user can successfully log in with valid credentials.',
        tags: ['Login', 'Auth'],
    },
    logoutTest: {
        owner: 'Tobias Andersen - [tobias@tobiasa.com]',
        tms: 'TEST-003',
        description: 'Validate that a user can successfully log out after logging in.',
        tags: ['Logout', 'Auth'],
    },
    checkboxTest: {
        owner: 'Tobias Andersen - [tobias@tobiasa.com]',
        tms: 'TEST-004',
        description: 'Verify that checkboxes can be toggled on and off correctly.',
        tags: ['Checkbox', 'UI'],
    },
};
function logTestDetails(testId) {
    const details = exports.testMetadata[testId];
    console.log(`Owner: ${details.owner}`);
    console.log(`TMS Link: ${details.tms}`);
    console.log(`Description: ${details.description}`);
    console.log(`Tags: ${details.tags.join(', ')}`);
}
exports.logTestDetails = logTestDetails;
//# sourceMappingURL=test-metadata.js.map