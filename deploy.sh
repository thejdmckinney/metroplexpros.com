#!/bin/bash

# Build and deploy to gh-pages branch like other sites

echo "Building site..."
npm run build

echo "Deploying to gh-pages branch..."

# Navigate to output directory
cd out

# Initialize git if not already
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/thejdmckinney/metroplexpros.com.git
fi

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages"

# Force push to gh-pages branch
git push --force origin main:gh-pages

echo "Deployed successfully to gh-pages branch!"
echo "Enable GitHub Pages in repository settings:"
echo "Settings > Pages > Source: Deploy from branch > Branch: gh-pages"