# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Expose the port (Next.js defaults to 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
