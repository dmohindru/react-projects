#!/bin/bash

# Determine the config file based on RUN_PROFILE
case "$RUN_PROFILE" in
  cluster1)
    CONFIG_JSON_PATH="/etc/react-app/config-cluster1.json"
    ;;
  cluster2)
    CONFIG_JSON_PATH="/etc/react-app/config-cluster2.json"
    ;;
  *)
    CONFIG_JSON_PATH="/etc/react-app/config-default.json"
    ;;
esac

echo "Run Profile: $RUN_PROFILE"
echo "Config file path: $CONFIG_JSON_PATH"

# Replace placeholder in Apache config template
ln -sf "$CONFIG_JSON_PATH" /usr/local/apache2/htdocs/config.json

# Start Apache
httpd-foreground