# Stage 1: compile and build angular codebase

# Use official node image as the base image
FROM node:18 AS builder 

# Set the working directory
WORKDIR /app

# Copy all the files from the current directory to the working directory    
COPY . .

# Install all the dependencies and Generate the build of the application
RUN npm install && npm run build --prod

# Second stage: serve the app

# Use nginx image as the base image
FROM nginx:latest AS ngi

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from the previous stage (builder) to the working directory of this stage
COPY --from=builder /app/dist/portfolio .

# Copy nginx configuration file
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# Give the proper rights to the folder to be able to read the files inside
RUN chmod 755 .

# Expose port 80
EXPOSE 80