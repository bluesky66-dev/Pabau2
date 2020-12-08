# Base on offical Node.js Alpine image
FROM node:alpine AS builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --production

# Copy all files
COPY . .

# Build app
RUN yarn build

# Host the static build directory
FROM halverneus/static-file-server:latest
COPY --from=builder out/ ./
