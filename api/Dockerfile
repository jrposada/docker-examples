FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf node_modules && npm ci

COPY . .

RUN mv .env.docker .env

CMD ["node", "./index.js"]

EXPOSE 3000