# Build on the node 12.14.1 image
FROM node:12.14.1-alpine3.11

# Create the /src/app directory
RUN mkdir -p /src/app

# Set working directory
WORKDIR /src/app

# Copy files to /src/app on the image
COPY . /src/app

# Install dependencies
RUN npm install --only=prod

# Build production bundle
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start node server
CMD [ "npm", "start" ]
