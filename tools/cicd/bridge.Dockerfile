FROM node:alpine AS builder
WORKDIR /usr/app
ENV HUSKY_SKIP_INSTALL=1
ENV HUSKY=0
COPY . .
RUN mv ./package.json-prod ./package.json
RUN yarn install --production --frozen-lockfile
RUN yarn prisma:generate
EXPOSE 4000
ENTRYPOINT [ "node", "./main.js" ]
