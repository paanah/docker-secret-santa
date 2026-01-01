# Base Image
FROM node:18-alpine

# İşçi Qovluq
WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Kodların köçürülməsi
COPY . .

# Port
EXPOSE 3000

# Start əmri
CMD ["npm", "start"]