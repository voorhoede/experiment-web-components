#!/bin/bash

# Only remove build directory if it exists.
if [ -d ./build/ ];
then
  rm -r ./build/;
fi

cd ./scripts/

echo "[1 of 7] - Building Native"
./build-native.sh

echo "[2 of 7] - Building Polymer"
./build-polymer.sh

echo "[3 of 7] - Building React"
./build-react.sh

echo "[4 of 7] - Building Skate"
./build-skate.sh

echo "[5 of 7] - Building Stencil"
./build-stencil.sh

echo "[6 of 7] - Building Svelte"
./build-svelte.sh

echo "[7 of 7] - Building Vue"
./build-vue.sh

echo "Done 👍🏻"
