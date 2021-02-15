# Base on offical Node.js Alpine image
FROM node:alpine AS builder

# Expose port 4000
EXPOSE 4000

# Set working directory
WORKDIR /usr/app
COPY ../../package.json ./

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged

ENV HUSKY_SKIP_INSTALL=1
ENV HUSKY=0
RUN yarn

# Copy all files
COPY ../.. .
RUN yarn prisma:generate
RUN yarn run nx build bridge-api && yarn install --production

FROM node:alpine
WORKDIR /usr/app

COPY --from=builder /usr/app/dist/apps/bridge-api/ ./dist/apps/bridge-api/
COPY --from=builder /usr/app/node_modules/ ./node_modules/
COPY --from=builder /usr/app/package.json ./
ENTRYPOINT [ "node", "/usr/app/dist/apps/bridge-api/main.js" ]
