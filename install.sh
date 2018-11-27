#!/bin/bash

echo "Installing React"
cd ./source/react
npm install

echo "Installing Stencil"
cd ../stencil
npm install

echo "Installing Vue"
cd ../vue
npm install

echo "Done"
