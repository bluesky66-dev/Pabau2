# Base on offical Node.js Alpine image
FROM node:alpine AS builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build app
RUN npm run build

FROM node:alpine
WORKDIR /usr/app

COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production
RUN yarn --frozen-lockfile

COPY --from=builder /usr/app/build ./build
#RUN pwd
#RUN ls -al
#RUN ls -al build/ || true
#RUN ls -al /app/build/ || true

EXPOSE 3000
CMD npm run server
