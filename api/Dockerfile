FROM node:alpine

# Set the working directory inside the image to /app
WORKDIR /app

# Copy files package.json and package-lock.json from Dockerfile location to ./ inside current working directory.
COPY package.json package-lock.json ./

# Run the usual node installation process
RUN rm -rf node_modules && npm ci

# Copy the resto of the source files.
COPY . .

# Rename .env.docker to .env so our app uses the docker prepared
# version instead of the dev one.
RUN mv .env.docker .env

# Define entry point.
CMD ["node", "./index.js"]

# @see https://docs.docker.com/engine/reference/builder/#expose
EXPOSE 3000