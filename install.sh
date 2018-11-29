#!/bin/bash

echo "[1 of 5] - Installing React..."
cd ./source/react
npm install

echo "[2 of 5] - Installing Skate..."
cd ../skate
npm install

echo "[3 of 5] - Installing Stencil..."
cd ../stencil
npm install

echo "[4 of 5] - Installing Svelte..."
cd ../svelte
npm install

echo "[5 of 5] - Installing Vue..."
cd ../vue
npm install

echo "Done 👍🏻"
