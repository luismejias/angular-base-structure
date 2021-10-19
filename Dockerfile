FROM node:14.16.01

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run build --prod

#Segunda etapa

FROM nginix:1.17.1-alpine

COPY --from=build-step /app/dist/angular-base-structure /usr/share/nginx/html
COPY --from=build-step /app/dist/angular-material /usr/share/nginx/html
COPY --from=build-step /app/dist/shared-ui /usr/share/nginx/html
