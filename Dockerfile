FROM node:alpine

WORKDIR /usr/app
COPY package.json .
RUN npm install -g nodemon
RUN npm install
RUN npx prisma db push
COPY . .
CMD ["npm","run","dev"]