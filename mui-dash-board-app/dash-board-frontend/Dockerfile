# Use the official Apache2 image as the base image
FROM httpd:2.4

# Copy the production build to the /var/www/html directory
COPY build/ /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

# Start Apache2 service
CMD ["httpd-foreground"]