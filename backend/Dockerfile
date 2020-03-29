FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
#ENTRYPOINT ["ng", "serve", "-H", "0.0.0.0"]
CMD [ "npm", "start" ]