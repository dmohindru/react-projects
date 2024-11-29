# Stage 1: Build the application
FROM gradle:8.3-jdk17-alpine AS build
WORKDIR /app

# Copy Gradle wrapper files and dependencies first to leverage Docker caching
COPY gradlew gradlew.bat settings.gradle.kts build.gradle.kts ./
COPY gradle ./gradle

# Download dependencies (use caching layer if dependencies are unchanged)
#RUN ./gradlew build -x test --parallel --no-daemon

# Copy the application source code
COPY src ./src

# Build the application
RUN ./gradlew bootJar

# Stage 2: Create the final image
FROM gradle:8.3-jdk17-alpine
WORKDIR /app

# Copy the built application JAR from the previous stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8081

# Set the entry point to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]