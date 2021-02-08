# Base on offical Node.js Alpine image
FROM node:alpine AS builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./

ENV HUSKY_SKIP_INSTALL=1
ENV HUSKY=0
RUN yarn

# Copy all files
COPY . .

# Build app
RUN yarn nx build bridge-api && yarn install --production

# Host the static build directory

FROM node:alpine
WORKDIR /usr/app

COPY --from=builder /usr/app/dist/apps/bridge-api/ ./dist/apps/bridge-api/
COPY --from=builder /usr/app/node_modules/ ./node_modules/
COPY --from=builder /usr/app/package.json ./
EXPOSE 4000
ENTRYPOINT [ "serve" ]
