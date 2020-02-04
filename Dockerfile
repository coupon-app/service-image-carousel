# Build on the node 12.14.1 image
FROM node:12.14.1

# Create the /src/app directory
RUN mkdir -p /src/app

# Set working directory
WORKDIR /src/app

# Copy files to /src/app on the image
COPY . /src/app

# Install dependencies
RUN yarn install

# Build production bundle
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start node server
CMD [ "npm", "start" ]
