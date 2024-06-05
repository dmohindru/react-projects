#!/bin/sh
# move to parent folder
cd ..

# Clear previous build folder
rm -rf build/

# Build project
npm run build

# Build docker image
docker build -t dmohindru/responsive-app .