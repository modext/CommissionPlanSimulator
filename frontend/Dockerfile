
FROM node:18.17 as builder

WORKDIR /usr/src/app

COPY frontend/package*.json ./

RUN npm install --legacy-peer-deps

COPY frontend/ ./

RUN npm run build
# RUN npm install --legacy-peer-deps

FROM nginx:alpine

COPY --from=builder /usr/src/app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
