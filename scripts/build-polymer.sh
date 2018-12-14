#!/bin/bash

mkdir -p ../build/polymer
cd ../source/polymer
npm run build
cd build/es6/src
cp app.js ../../../../../build/polymer/hue-slider-polymer.js
cd ../../
