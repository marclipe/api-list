# syntax=docker/dockerfile:1

FROM node:latest
WORKDIR /api-list
COPY . .
RUN rm -rf node_modules
RUN npm install
CMD ["node", "app.js"]
EXPOSE 3000