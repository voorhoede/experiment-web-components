#!/bin/bash

echo "[1 of 6] - Installing Polymer..."
cd ./source/react
npm install

echo "[2 of 6] - Installing React..."
cd ../polymer
npm install

echo "[3 of 6] - Installing Skate..."
cd ../skate
npm install

echo "[4 of 6] - Installing Stencil..."
cd ../stencil
npm install

echo "[5 of 6] - Installing Svelte..."
cd ../svelte
npm install

echo "[6 of 6] - Installing Vue..."
cd ../vue
npm install

echo "Done 👍🏻"
