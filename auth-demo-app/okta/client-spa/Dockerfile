FROM node:20.3.1 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy only the necessary directories and files
COPY public/ public/
COPY src/ src/
COPY tsconfig.json tsconfig.json

# Build the React application for production
RUN npm run build

# Stage 2: Serve the built files with Apache HTTPD
FROM httpd:2.4

# Copy the build directory from the previous stage to the Apache document root
COPY --from=build /app/build/ /usr/local/apache2/htdocs/

# Copy all environment-specific config files
COPY ./configs /etc/react-app/

# Expose port 80
EXPOSE 80

# Entrypoint script
COPY ./scripts/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Start Apache server in the foreground
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]