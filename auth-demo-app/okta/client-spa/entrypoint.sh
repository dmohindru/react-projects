#!/bin/bash

# Determine the config file based on RUN_PROFILE
case "$RUN_PROFILE" in
  cluster1)
    CONFIG_JSON_PATH="/etc/react-app/config-cluster1.json"
    ;;
  cluster2)
    CONFIG_JSON_PATH="/etc/react-app/config-cluster.json"
    ;;
  *)
    CONFIG_JSON_PATH="/etc/react-app/config-default.json"
    ;;
esac

# Replace placeholder in Apache config template
sed "s|{{CONFIG_JSON_PATH}}|$CONFIG_JSON_PATH|g" /usr/local/apache2/conf/httpd.conf.template > /usr/local/apache2/conf/httpd.conf

# Start Apache
httpd-foreground