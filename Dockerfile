FROM node:17-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf