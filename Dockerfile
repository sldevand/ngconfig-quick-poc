# Stage 1: Build the Angular app
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build -- --configuration=production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
