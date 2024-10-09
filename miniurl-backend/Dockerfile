# Use the official Maven image as the base image
FROM maven:3.9-eclipse-temurin-21-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml and any other necessary configuration files
COPY ./pom.xml /app
COPY ./src /app/src

# Build the application
RUN mvn clean package -Dmaven.test.skip=true

# Create a new image for running the application
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Wait for mongodb start correctly before running the application since depend_on in docker-compose does not guarantee that the mongodb is ready    
COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

# Expose the port on which the Spring Boot application will run
EXPOSE 8080

# Command to run the application
CMD ["bash", "-c", "/usr/wait-for-it.sh --timeout=600 mongodb:27017 && java -jar app.jar"]