FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install --audit false
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
