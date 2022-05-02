FROM node:16.14.2
WORKDIR /app
COPY package.json .
RUN npm cache clear --force &&  npm install --legacy-peer-deps
COPY . .
CMD npm start