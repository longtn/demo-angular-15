# Use Node.js as the base image
FROM node:20 as build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use Nginx as the server
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
