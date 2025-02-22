"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
class MyReporter {
    constructor() {
        this.testCount = 0;
        this.totalTests = 0;
    }
    onBegin(_config, suite) {
        console.clear();
        console.log(chalk_1.default.magenta("\n=== Test Suite Started ==="));
        try {
            let currentSuite = suite;
            while (currentSuite.suites.length > 0) {
                currentSuite = currentSuite.suites[0];
            }
            console.log(`📂 Test Suite: ${chalk_1.default.bold.white(currentSuite.title)}`);
        }
        catch (error) {
            console.error(chalk_1.default.redBright("❌ Error accessing suite title:"), error);
        }
        console.log(chalk_1.default.gray(`🕒 Starting test execution...\n`));
        this.totalTests = suite.allTests().length;
    }
    onTestBegin(test) {
        this.testCount++;
        console.log(`${chalk_1.default.bold.hex('#FF00FF')('🚀 [RUNNING]')} ${chalk_1.default.hex('#00FFFF')(test.title)}`);
    }
    onTestEnd(test, result) {
        if (result.status === 'passed') {
            console.log(`${chalk_1.default.bold.yellowBright('✅ [PASSED]')} ${chalk_1.default.whiteBright(test.title)}`);
        }
        else if (result.status === 'failed') {
            console.log(`${chalk_1.default.bold.redBright('❌ [FAILED]')} ${chalk_1.default.whiteBright(test.title)}`);
            if (result.error) {
                console.error(chalk_1.default.redBright(`   📌 Reason: ${result.error.message}`));
            }
        }
        if (this.testCount === this.totalTests) {
            console.log(chalk_1.default.magenta("\n=== Test Run Completed ==="));
            console.log(`📊 Final Status: ${chalk_1.default.bold(result.status.toUpperCase())}`);
            if (result.status === 'failed') {
                console.log(chalk_1.default.redBright(`❗ Some tests failed. Check logs above for details.`));
            }
            else {
                console.log(chalk_1.default.bold.yellowBright(`🎉 All tests passed!`));
            }
            console.log(chalk_1.default.gray(`🕒 Test execution finished.`));
        }
    }
}
exports.default = MyReporter;
//# sourceMappingURL=MyReporter.js.map