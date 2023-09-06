FROM node:18.17-alpine

COPY package*.json ./
COPY src ./src

RUN npm install

CMD ["npm", "run", "start"]
EXPOSE $PORT