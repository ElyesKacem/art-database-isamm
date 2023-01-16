FROM node:alpine

WORKDIR /usr/app
COPY package.json .
COPY prisma ./prisma/
COPY .env ./
RUN npm install -g nodemon
RUN npm install
COPY . .
CMD ["npm","run","dev"]