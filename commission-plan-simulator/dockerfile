
FROM node:16 as builder

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copying this separately prevents re-running npm install on every code change.
COPY frontend/package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY frontend/ ./

# Build the Next.js application.
RUN npm run build

# Use the official nginx image as a base for the production image.
# https://hub.docker.com/_/nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it from the outside.
EXPOSE 80

# Run nginx on container startup.
CMD ["nginx", "-g", "daemon off;"]
