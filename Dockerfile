
# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the NestJS application
EXPOSE 3000

# Build the NestJS application using Yarn
RUN yarn build

# Start the NestJS application using Yarn
CMD ["yarn", "start:prod"]
