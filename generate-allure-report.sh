#!/bin/bash

# Generate Allure report
echo "Generating Allure report..."
allure generate allure-results --clean --output allure-report

# Open Allure report in browser
echo "Opening Allure report..."
allure open allure-report
