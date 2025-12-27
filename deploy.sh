#!/bin/bash

# Deploy to gh-pages branch using gh-pages package
# This maintains proper git history unlike the old method

echo "Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "Your site will be live at https://www.metroplexpros.com"