FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn --production=true
COPY . .
CMD [ "yarn", "start"]