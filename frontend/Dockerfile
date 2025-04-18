# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:stable-alpine

# Copy built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Set the PORT environment variable for Nginx
ENV PORT=8080

# Update Nginx configuration to use the PORT environment variable
RUN sed -i 's/listen       80;/listen       ${PORT};/' /etc/nginx/conf.d/default.conf

# Expose the port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]