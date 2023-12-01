FROM node:18.17.1

WORKDIR /images-backend

COPY package*.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

CMD ["npm", "start"]
