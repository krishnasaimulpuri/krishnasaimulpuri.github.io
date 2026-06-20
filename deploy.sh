#!/bin/bash
set -e

echo "Committing changes to main..."
git add -A
git commit -m "Update portfolio site" || echo "Nothing to commit"
git push origin main

echo "Building production bundle..."
npm run build

echo "Deploying to gh-pages..."
npx gh-pages -d build -f

echo "Done! Site will be live at https://krishnasaimulpuri.github.io"
