#!/bin/sh
# move to parent folder
cd ..

# Build docker image
docker build -t dmohindru/dashboard-app .