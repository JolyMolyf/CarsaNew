FROM node:alpine

RUN npm install -g serve

WORKDIR /app

COPY package.json .

RUN npm install --quiet

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
