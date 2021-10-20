FROM node:14.16.0 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run build --prod

#Segunda etapa

FROM nginx:1.21.3-alpine

COPY --from=build-step /app/dist/angular-base-structure /usr/share/nginx/html
