FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S jimmy -u 1001

# Change ownership to non-root user
RUN chown -R jimmy:nodejs /app
USER jimmy

# Start the bot
CMD ["node", "index.js"]
