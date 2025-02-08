"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const page_setup_1 = require("../../src/tobias-playwright/setup/page-setup");
const LoginPage = tslib_1.__importStar(require("../pages/sauce-demo-login-page"));
const ProductsPage = tslib_1.__importStar(require("../pages/sauce-demo-products-page"));
//If you want to run the tests in parallel, you can use the test.describe.configure() method to set the mode to parallel. By default, tests are run sequentially.
page_setup_1.test.describe.configure({ mode: 'parallel' });
page_setup_1.test.describe('Saucedemo tests success and failures cases', () => {
    (0, page_setup_1.test)('Saucedemo tests - Successful test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        //verifying products page is displayed only on successful login
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
    (0, page_setup_1.test)('Saucedemo tests - Failure test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.failureLogin();
        //verifying products page is displayed only on successful login
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
});
//# sourceMappingURL=sauce-demo-parallel-execution.spec.js.map