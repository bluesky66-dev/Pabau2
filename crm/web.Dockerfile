# Base on offical Node.js Alpine image
FROM node:alpine AS builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./

# Install dependencies
COPY ui/package.json ./ui/
RUN cd ui && yarn install

COPY web/package.json ./web/
RUN cd web && yarn install

# Copy all files
COPY web/ ./web/
COPY tsconfig.base.json ./

# Build app
RUN pwd && ls -al
RUN yarn --cwd crm/web build || true
RUN yarn --cwd web build || true


# Host the static build directory
FROM halverneus/static-file-server:latest
COPY --from=builder out/ ./
