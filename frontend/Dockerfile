# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy the rest of your application's source code to the container
COPY . ./

# Build the production build
RUN npm run build

# Start the app
CMD ["npm", "start"]
