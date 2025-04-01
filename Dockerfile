# Stage 1: Build the application
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json  ./
COPY yarn.lock ./
# RUN yarn ci
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]