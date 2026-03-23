FROM node:18-alpine

ARG APP_VERSION=v1
ENV APP_VERSION=${APP_VERSION}

WORKDIR /app
COPY package.json .
COPY server.js .
EXPOSE 8888
CMD ["node", "server.js"]
