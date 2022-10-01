FROM node:16

WORKDIR /app
COPY dist ./dist/
COPY package.json ./
COPY package-lock.json ./
RUN npm install

CMD ["node", "/app/dist/index.js"]