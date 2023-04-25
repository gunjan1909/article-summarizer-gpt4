FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the npm packages
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port used by the application
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]