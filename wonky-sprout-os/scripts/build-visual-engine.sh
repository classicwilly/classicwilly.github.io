#!/bin/bash
# filepath: c:\wonky_sprout_os\scripts\build-visual-engine.sh

# This script builds the visual engine for the Wonky Sprout OS project.

# Step 1: Compile SASS to CSS
echo "Compiling SASS to CSS..."
sass assets/css/main.scss assets/css/main.css

# Step 2: Minify JavaScript files
echo "Minifying JavaScript files..."
uglifyjs assets/js/main.js -o assets/js/main.min.js
uglifyjs assets/js/visual-engine.js -o assets/js/visual-engine.min.js

# Step 3: Copy necessary assets to the build directory
echo "Copying assets..."
mkdir -p build/assets/css
mkdir -p build/assets/js
cp assets/css/*.css build/assets/css/
cp assets/js/*.min.js build/assets/js/

# Step 4: Notify completion
echo "Visual engine build completed successfully."