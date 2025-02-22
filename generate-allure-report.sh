#!/bin/bash

# ✅ Set the correct base directory for Allure reports
BASE_DIR="/Volumes/chappy/chappy/Coding/Projects/work/personal/QA/Veriflow-playwright"
ALLURE_DIR="$BASE_DIR/allure"
ALLURE_RESULTS="$ALLURE_DIR/allure-results"
ALLURE_HISTORY="$ALLURE_DIR/allure-history"
ALLURE_REPORT="$ALLURE_DIR/allure-report"
ALLURE_CONFIG="$ALLURE_DIR/config"
ROOT_ALLURE_RESULTS="$BASE_DIR/allure-results"

# ✅ Ensure the allure directories exist
mkdir -p "$ALLURE_RESULTS" "$ALLURE_HISTORY"

# ✅ Move old allure-results into allure-history (prevent duplicates)
if [ -d "$ALLURE_RESULTS" ] && [ "$(ls -A "$ALLURE_RESULTS")" ]; then
    TIMESTAMP=$(date +%Y%m%d-%H%M%S)
    ARCHIVED_RESULTS="$ALLURE_HISTORY/allure-results-$TIMESTAMP"
    
    # Move only if not already archived
    if [ ! -d "$ARCHIVED_RESULTS" ]; then
        echo "🔄 Moving old Allure results to history: $ARCHIVED_RESULTS"
        mv "$ALLURE_RESULTS" "$ARCHIVED_RESULTS"
        echo "✅ Archived previous allure-results as: allure-results-$TIMESTAMP"
    fi
fi

# ✅ Move allure-results from root directory to allure folder if it exists
if [ -d "$ROOT_ALLURE_RESULTS" ]; then
    echo "🔄 Moving root allure-results/ to $ALLURE_RESULTS..."

    # Ensure the target allure-results exists before moving
    mkdir -p "$ALLURE_RESULTS"

    # Move all contents without overwriting
    mv "$ROOT_ALLURE_RESULTS"/* "$ALLURE_RESULTS/" 2>/dev/null || echo "⚠️ No files to move from root allure-results"

    # Remove empty root allure-results folder
    rm -rf "$ROOT_ALLURE_RESULTS"

    echo "✅ Moved root allure-results to $ALLURE_RESULTS"
fi

# ✅ Ensure allure-results is empty before running tests
mkdir -p "$ALLURE_RESULTS"

# ✅ Copy configuration files to allure-results
echo "📂 Copying Allure configuration files..."
cp "$ALLURE_CONFIG/environment.properties" "$ALLURE_RESULTS/"
cp "$ALLURE_CONFIG/categories.json" "$ALLURE_RESULTS/"

# ✅ Ensure trend files exist and sync them from history
echo "🔄 Syncing history to allure-results for trend tracking..."
for file in history-trend.json history.json duration-trend.json retry-trend.json; do
    if [ ! -f "$ALLURE_HISTORY/$file" ]; then
        echo "🛠️ Creating missing trend file: $file"
        touch "$ALLURE_HISTORY/$file"
    fi
    cp "$ALLURE_HISTORY/$file" "$ALLURE_RESULTS/" 2>/dev/null
done

# ✅ Generate Allure report
echo "📊 Generating Allure report..."
allure generate "$ALLURE_RESULTS" --clean --output "$ALLURE_REPORT"

# ✅ Open Allure report
echo "🌍 Opening Allure report..."
allure open "$ALLURE_REPORT"
