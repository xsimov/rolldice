FROM node:15.1.0-alpine3.12

WORKDIR /app
COPY public /app/public

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY src /app/src
RUN yarn build

COPY server.js /app
CMD yarn serve
