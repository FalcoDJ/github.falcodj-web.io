#!/usr/bin/sh

echo "Must be run as ROOT!"
cp -R */* /var/www/html/
cp -R * /var/www/html/
rm /var/www/html/push.sh