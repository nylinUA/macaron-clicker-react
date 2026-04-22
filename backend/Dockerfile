# =========================================
# Stage: Development (Vite React.js App)
# =========================================
ARG NODE_VERSION=24.14.0-alpine
 
FROM node:${NODE_VERSION} AS dev
 
# Set working directory inside the container
WORKDIR /app
 
# Copy package files
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy rest of the source code
COPY . .
 
RUN npm run build

# DEV run
#CMD ["node", "src/index.ts"]
CMD ["npm", "run", "dev"]