FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
