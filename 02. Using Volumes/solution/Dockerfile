FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install && yarn global add nodemon

COPY . .

CMD ["node", "src/index.js"]
