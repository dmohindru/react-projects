#!/bin/sh

# Start mongodb
sudo systemctl start mongod.service

# Export enviornment variables used by backend
export ACCESS_TOKEN_SECRET='dhruv1234567890'
export REFRESH_TOKEN_SECRET='dhruv1234567890'