import { Reporter, FullConfig, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import chalk from 'chalk';

export default class MyReporter implements Reporter {
    
    private testCount = 0;
    private totalTests = 0;

    onBegin(_config: FullConfig, suite: Suite): void {
        console.clear();
        console.log(chalk.magenta("\n=== Test Suite Started ==="));

        try {
            let currentSuite = suite;
            while (currentSuite.suites.length > 0) {
                currentSuite = currentSuite.suites[0];
            }
            console.log(`📂 Test Suite: ${chalk.bold.white(currentSuite.title)}`);
        } catch (error) {
            console.error(chalk.redBright("❌ Error accessing suite title:"), error);
        }
        console.log(chalk.gray(`🕒 Starting test execution...\n`));
        this.totalTests = suite.allTests().length;
    }

    onTestBegin(test: TestCase): void {
        this.testCount++;
        console.log(`${chalk.bold.hex('#FF00FF')('🚀 [RUNNING]')} ${chalk.hex('#00FFFF')(test.title)}`);
    }
    
    onTestEnd(test: TestCase, result: TestResult): void {
        if (result.status === 'passed') {
            console.log(`${chalk.bold.yellowBright('✅ [PASSED]')} ${chalk.whiteBright(test.title)}`);
        } else if (result.status === 'failed') {
            console.log(`${chalk.bold.redBright('❌ [FAILED]')} ${chalk.whiteBright(test.title)}`);
            if (result.error) {
                console.error(chalk.redBright(`   📌 Reason: ${result.error.message}`));
            }
        }
        if (this.testCount === this.totalTests) {
            console.log(chalk.magenta("\n=== Test Run Completed ==="));
            console.log(`📊 Final Status: ${chalk.bold(result.status.toUpperCase())}`);
            if (result.status === 'failed') {
                console.log(chalk.redBright(`❗ Some tests failed. Check logs above for details.`));
            } else {
                console.log(chalk.bold.yellowBright(`🎉 All tests passed!`));
            }
            console.log(chalk.gray(`🕒 Test execution finished.`));
            console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
        }
    }
}
