# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Copy all files
COPY . .

RUN npm install -g serve
WORKDIR /static
RUN pwd && ls -als
COPY --from=builder /usr/app/dist/apps/web/exported/ ./
RUN pwd && ls -als
EXPOSE 5000
ENTRYPOINT [ "serve" ]
