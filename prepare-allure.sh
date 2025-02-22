#!/bin/bash

# ✅ Set the correct base directory for Allure reports
BASE_DIR="/Volumes/chappy/chappy/Coding/Projects/work/personal/QA/Veriflow-playwright"

# Paths for Allure results and history
ALLURE_DIR="$BASE_DIR/allure"
ALLURE_RESULTS="$ALLURE_DIR/allure-results"
ALLURE_HISTORY="$ALLURE_DIR/allure-history"
ROOT_ALLURE_RESULTS="$BASE_DIR/allure-results"

# ✅ Ensure Allure history folder exists
mkdir -p "$ALLURE_HISTORY"

# ✅ Archive old allure-results into history
if [ "$(ls -A "$ALLURE_RESULTS" 2>/dev/null)" ]; then
    TIMESTAMP=$(date +%Y%m%d-%H%M%S)
    mv "$ALLURE_RESULTS" "$ALLURE_HISTORY/allure-results-$TIMESTAMP"
    echo "✅ Archived previous allure-results as allure-results-$TIMESTAMP"
fi

# ✅ Create a fresh allure-results folder only if it does not exist
if [ ! -d "$ALLURE_RESULTS" ]; then
    mkdir -p "$ALLURE_RESULTS"
    echo "✅ Created fresh allure-results directory."
fi

# ✅ Ensure trend files exist inside allure-history
echo "📊 Moving history to allure-results for trend tracking..."
for file in history-trend.json history.json duration-trend.json retry-trend.json; do
    if [ ! -f "$ALLURE_HISTORY/$file" ]; then
        echo "🛠️ Creating missing trend file: $file"
        touch "$ALLURE_HISTORY/$file"
    fi
    cp "$ALLURE_HISTORY/$file" "$ALLURE_RESULTS/" 2>/dev/null
done

echo "✅ Allure history setup complete."
echo "✅ Allure results cleaned. Ready for test execution."
