# Base on offical Node.js Alpine image
FROM node:alpine AS builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

ENV HUSKY_SKIP_INSTALL=1
ENV HUSKY=0
RUN yarn

# Copy all files
COPY . .

# Build app
#RUN yarn run nx build
#RUN yarn run web:export
RUN yarn run nx run web:export

# Host the static build directory

FROM node:alpine
RUN npm install -g serve
WORKDIR /static
COPY --from=builder /usr/app/dist/apps/web/exported/ ./
EXPOSE 5000
ENTRYPOINT [ "serve" ]
