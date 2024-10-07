# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install all dependencies, including dev dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the application port (default for Node.js is 3000)
EXPOSE 3000

# Install nodemon globally (optional if you want to run with nodemon in the container)
RUN npm install -g nodemon

# Define the command to run the app with nodemon
CMD ["nodemon", "src/app.js"]
