# Stage 1: Build the application
FROM node:16.20-alpine3.16 as build

# Create a working directory
WORKDIR /app

# Copy source code to working directory
COPY . .

# Install dependencies and build the application
RUN yarn install
RUN yarn build

# Stage 2: Create the production image
FROM nginx:1.25.0-alpine

# Copy the built application from the build stage to the NGINX web root
COPY --from=build /app/build /usr/share/nginx/html

# Containers run NGINX with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]