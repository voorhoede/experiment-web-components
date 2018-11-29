#!/bin/bash

echo "[1 of 4] - Installing React..."
cd ./source/react
npm install

echo "[2 of 4] - Installing Skate..."
cd ../skate
npm install

echo "[3 of 4] - Installing Stencil..."
cd ../stencil
npm install

echo "[4 of 4] - Installing Vue..."
cd ../vue
npm install

echo "Done 👍🏻"
